import react from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './components/NotFound'

function App() {
  

  return (
    <>
     <BrowserRouter >
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
