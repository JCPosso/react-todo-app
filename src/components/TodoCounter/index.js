import React, { useContext } from 'react'
import './TodoCounter.css';
import { TodoContext } from '../../context';
function TodoCounter() {
  const {    completetedTasks,
    totalTasks} = useContext(TodoContext)
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completetedTasks}</span> de <span>{totalTasks}</span> TODOs
    </h1>
  )
}

export default TodoCounter