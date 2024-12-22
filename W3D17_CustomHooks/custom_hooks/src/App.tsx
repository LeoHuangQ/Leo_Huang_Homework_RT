
import Input from "./Input";
import "./App.css";
import TrueFalse from "./TrueFalse";
import Toggle from "./Toggle";
import useForceUpdate from "./useForceUpdate";

function App() {
  const forceUpdate = useForceUpdate();
  const handleForceUpdate = () => {
    console.log("Forcing a re-render...");
    forceUpdate();
  };

  console.log("App is re-rendering");
  return (
    <div>
      <Input />
      <hr />
      <Input id="input-id" />
      <hr/>
      <TrueFalse />
      <hr/>
      <Toggle />
      <hr/>
      <p>{Date.now()}</p>
      <button onClick={handleForceUpdate}>Force Update</button>
      <hr/>
    </div>
  );
}

export default App;
