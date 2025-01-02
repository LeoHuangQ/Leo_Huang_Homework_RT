import React, { useState, useContext } from "react";
import { addTodo } from "../reducer/reducer";
import { Context } from "../App";

export default function TodoList() {
  const [task, setTask] = useState("");
  const context = useContext(Context);

  const handlerClick = (e) => {
    e.preventDefault();
    context.todoDispatch(
      addTodo({
        id: Date.now(),
        task,
        completed: false,
        edit: false,
      })
    );
    setTask("");
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
