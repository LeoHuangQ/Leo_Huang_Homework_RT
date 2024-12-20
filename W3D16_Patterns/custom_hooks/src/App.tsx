import useFetch from "./useFetch";
import "./App.css";

const urlStr = "https://jsonplaceholder.typicode.com/users/1";
function App() {
  const [data, isLoading, isError] = useFetch(urlStr);

  return (
    <div>
      <label>URL: {urlStr}</label>
      <br />
      <label>data: {data}</label>
      <br />
      <label>isLoading: {isLoading.toString()}</label>
      <br />
      <label>is Error: {isError.toString()}</label>
    </div>
  );
}

export default App;
