import React, { createContext,useState } from 'react'
import { useLocalStorage } from './../hooks/useLocalStorage';

const TodoContext = createContext();

function TodoProvider({children}) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchedTask, setSearchedTask] = useState('')

  const searchedTasks = tasks.filter(
    (task) => {
      const taskText = task.text.toLowerCase();
      const searchedTaskText = searchedTask.toLowerCase();
      return taskText.includes(searchedTaskText)
    }
  )
  const completetedTasks = tasks.filter(
    task => !!task.completed
  ).length;
  const totalTasks = tasks.length;

  const completeTask =  (text) => {
    const newListTasks = [...tasks]
    const taskIndex = newListTasks.findIndex(
      (task) => task.text === text
    );
    newListTasks[taskIndex].completed = true;
    saveTasks(newListTasks);
  }

  const deleteTask =  (text) => {
    const newListTasks = [...tasks]
    const taskIndex = newListTasks.findIndex(
      (task) => task.text === text
    );
    newListTasks.splice(taskIndex, 1);
    saveTasks(newListTasks);
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completetedTasks,
      totalTasks,
      searchedTask,
      setSearchedTask,
      searchedTasks,
      completeTask,
      deleteTask
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}