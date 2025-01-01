import "./App.css";
import TodoList from "./component/todoList/TodoList";
import TodoItem from "./component/todoList/TodoItem";
import Counter from "./component/Counter";

function App() {
  return (
    <div>
      <Counter />
      <TodoList />
      <TodoItem />
    </div>
  );
}

export default App;
