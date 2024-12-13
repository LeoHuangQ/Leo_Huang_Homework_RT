import { useEffect, useState } from 'react'

function CounterTimer() {
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);

    const timeInterval = ()=>{
        console.log(start, count);

        
            setTimeout(()=>{
                setCount(count + 1);
                // timeInterval();
            }, 1000)
        
    }
    useEffect(()=>{
        if (start){
            timeInterval();
        }
    }, );

    const timeStart = ()=>{
        console.log(start, count);
        setStart(true);
        timeInterval();
        
    }
    const timeStop = ()=>{
        console.log(start, count);
        setStart(false);
    }
    const timeReset = ()=>{
        console.log(start, count);
        setStart(false);
        setCount(0);
    }
    
    return (
      <>  
      <div>
        <h3>Counter Timer</h3>
      <label>{count}</label>
      <br></br>
        <button onClick={timeStart}>Start</button>
        <button onClick={timeStop}>Pause</button>
        <button onClick={timeReset}>Reset</button>
      </div>
        
      </>
    )
  }
  
  export default CounterTimer