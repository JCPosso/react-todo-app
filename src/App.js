import './App.css';
import {Home} from './components/Home';
import { TodoProvider } from './context';
import React from 'react'

function App() {
  return (
    <TodoProvider>
    <Home/>
    </TodoProvider>
  );
}

export default App;
