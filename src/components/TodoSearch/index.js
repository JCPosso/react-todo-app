import React, { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../context';

function TodoSearch() {
  const {    searchedTask,
    setSearchedTask} = useContext(TodoContext)
  return (
    <input
      placeholder="Search something..."
      className="TodoSearch"
      value={searchedTask}
      onChange={(event) => {
        setSearchedTask(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
