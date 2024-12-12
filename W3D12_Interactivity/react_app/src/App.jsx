import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Build from './MyList'
import TodoList from './TodoList'
import LabelSelect from './LabelSelect'


function App() {
  
  return (
    <>
      <div id="AppDiv">
        <div> 
          <Build/>
        </div>
        <div>
          <TodoList></TodoList>
        </div>
        <div>
          <LabelSelect></LabelSelect>
        </div>
      </div>
    </>
  )
}

export default App

