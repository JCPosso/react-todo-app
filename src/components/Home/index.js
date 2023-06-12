import React, { useContext } from 'react'
import TodoCounter from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import TodoList from '../TodoList'
import {CreateTodoBtn} from '../CreateTodoBtn'
import {TodoItem} from '../TodoItem';
import {TodosError} from  '../TodosError'
import {EmptyTodos} from  '../EmptyTodos'
import {TodosLoading} from  '../TodosLoading'
import { TodoContext } from '../../context'

function Home() {
  const {
    loading,
    error,
    searchedTasks,
    completeTask,
    deleteTask} = useContext(TodoContext)
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
      {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError/>}
        {(!loading && searchedTasks.length === 0) && <EmptyTodos />}
        {searchedTasks.map(task => (
          <TodoItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TodoList>
      <CreateTodoBtn />
    </>
  )
}

export {Home}