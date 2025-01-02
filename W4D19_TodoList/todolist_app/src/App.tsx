import "./App.css";
import TodoList from "./component/todoList/TodoList";
import TodoItem from "./component/todoList/TodoItem";
import Counter from "./component/Counter";
import TodoRemove from './component/todoList/TodoRemove';

function App() {
  return (
    <div>
      {/* <Counter /> */}
      <TodoList />
      <TodoItem />
      <TodoRemove />
    </div>
  );
}

export default App;
