import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/reducer/todosReducer";

export default function TodoItem() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log("todos in edit/delete", todos);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              onChange={() =>
                dispatch(updateTodo({ ...todo, completed: !todo.completed }))
              }
              checked={todo.completed}
            />
            <input
              type="text"
              value={todo.task}
              disabled={!todo.edit}
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
              onChange={(e) => {
                dispatch(updateTodo({ ...todo, task: e.target.value }));
              }}
            />
            <button
              onClick={() => {
                dispatch(updateTodo({ ...todo, edit: !todo.edit }));
              }}
            >
              {!todo.edit ? "Edit" : "Save"}
            </button>
            <button
              onClick={() => {
                dispatch(deleteTodo({ ...todo }));
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
