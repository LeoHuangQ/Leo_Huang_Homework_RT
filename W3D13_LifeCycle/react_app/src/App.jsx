import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts';
import CounterTimer from './CounterTimer';

function App() {
  const [postId, setPostId] = useState(1);
  const [postInfo, setPostInfo] = useState('');
  
    
  return (
    <>  
    <div className="container">
      <div>
        <Posts></Posts>
      </div>
      <div>
        <CounterTimer></CounterTimer>
      </div>
    </div>
      
    </>
  )
}


export default App
