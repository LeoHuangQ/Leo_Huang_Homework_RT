import useFetch from "./useFetch";
import { useState , useEffect} from "react";
import  "./App.css";
import useDebounce from "./useDebounce";

const urlStr = "https://jsonplaceholder.typicode.com/users/1";
function App() {
  const [inputValue, setInputValue] = useState("");
  const debounce = useDebounce(inputValue, 1000);
  const [data, isLoading, isError] = useFetch(urlStr);

  useEffect(() => {
    console.log("Debounced Value:", debounce);
}, [debounce]);

  return (
    <div>
      <div>
        <label>input is: {debounce}</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <hr/>
      </div>
      <div>
        <label>URL: {urlStr}</label>
        <br />
        <label>isLoading: {isLoading.toString()}</label>
        <br />
        <label>is Error: {isError.toString()}</label>
        <br />
        <label>data: {data}</label>
      </div>
    </div>
  );
}

export default App;
