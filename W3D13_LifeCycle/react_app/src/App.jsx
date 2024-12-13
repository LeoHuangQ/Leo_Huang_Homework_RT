import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts';
import CounterTimer from './CounterTimer';
import PostsVariation from './PostVariation';

export default function App() {
    
  return (
    <>  
    <div className="container">
      <div className='card'>
        <Posts></Posts>
      </div>
      <div className='card'>
        <CounterTimer></CounterTimer>
      </div>
      <div className='card'>
        <PostsVariation></PostsVariation>
      </div>
    </div>
      
    </>
  )
}


