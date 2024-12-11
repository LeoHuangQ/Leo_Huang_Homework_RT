import './App.css';
import {useState} from "react";

function App() {
  const title = 'hello';
  const age = 17;
  const names = ["test name 1", "test name 2", "test name 3"];
  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
  ];
  const [count, setCount] = useState(0);
  const increaseCounter = () =>{
    // count += 1;
    setCount(count + 1);
  }

  return (
    <div className="App">{title} World! 
      <Tags id = {1} name="aaa" comments='test1'/>
      <Tags id = {2} name="bbb" comments='test2'/>
      <Tags id = {3} name="ccc" comments='test3'/>
      <div>{age >= 18 ? <h1>{age} over age</h1> : <h1>{age} under age</h1>}</div>
      <ui>
        {
          names.map((name,key) => {
            return (
            <li key={key}>{name}</li>
          );
          })
        }
        </ui> 
        <ol>
          {
          planets.map((planet, index) =>{
            if (planet.isGasPlanet){
              return (
                <li>Number-{index}: {planet.name}</li>
              );
            } else{
              return (<li></li>);
            }
          })
          }
          </ol> 
        <h1>{count}</h1>
        <button onClick={increaseCounter}>Increase Click</button>
    </div>
  );
}

const Tags = (props) => {
  return (
    <div>
      <h1>{props.id} is {props.name}</h1>
    </div>
  )
}

export default App;
