import react from 'react';
import './App.css'
import Header from './components/Header'
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './components/NotFound'
import Detail from './components/Detail'

function App() {
  

  return (
    <>
     <BrowserRouter >
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
