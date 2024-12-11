import './App.css';
import {useState} from "react";

function App() {
  const [paraDisplay, paraShowHide] = useState('');
  const btnShowHide = ()=>{
    if (paraDisplay === ''){
      paraShowHide('None');
    }
    else{
      paraShowHide('');
    }
  }

  const disableBtn = (event)=>{
    event.target.disabled = 'true';
  }

  const enableBtn = (event)=>{
    event.target.disabled = '';
  }

  const ShowHide = ()=>{
    return (
      <div>
        <button onClick={btnShowHide}>Show and Hide below</button>
        <p class="content" style={{display:paraDisplay}}>
          'Test data is here. Click button to hide and show this part.'
        </p>
      </div>
    );
  }
  return (
    <div className="App">
      <button  onMouseOut={enableBtn} onMouseOver={disableBtn}>Can Not Click me!</button>
      <br></br>
      <br></br>
      <ShowHide />
    </div>
  );
}




export default App;
