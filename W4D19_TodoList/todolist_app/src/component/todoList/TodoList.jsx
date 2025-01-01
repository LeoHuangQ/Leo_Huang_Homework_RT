import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/reducer/todosReducer";

export default function todoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log("todos in add", todos);
  const [task, setTask] = useState("");

  const handlerClick = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        task,
        completed: false,
        edit: false,
      })
    );
    setTask('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handlerClick}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
