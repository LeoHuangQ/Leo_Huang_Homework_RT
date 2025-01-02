import React, { useReducer, useState } from 'react'
import './App.css'
import todosReducer from './reducer/reducer'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

const initialState = [
  { id: 1, task: "test 1", completed: false, edit: false },
  { id: 2, task: "test 2", completed: false, edit: false },
];
export const Context = React.createContext();

function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);


  return (
    <Context.Provider value={{todoList: todos, todoDispatch: dispatch}}>
      <TodoList />
      <TodoItem />
    </Context.Provider>
  )
}

export default App
