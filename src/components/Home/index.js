import React from 'react'
import TodoCounter from '../TodoCounter'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList'
import CreateTodoBtn from '../CreateTodoBtn'

function Home() {
  return (
  <>
    <TodoCounter/>
    <TodoSearch/>
    <TodoList/>
    <CreateTodoBtn/>
  </>
  )
}

export default Home