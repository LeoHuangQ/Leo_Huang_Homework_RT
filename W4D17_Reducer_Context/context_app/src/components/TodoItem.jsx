import React, { useContext, useState } from "react";
import { updateTodo, deleteTodo } from "../reducer/reducer";
import { Context } from "../App";

export default function TodoItem() {

  const context = useContext(Context);


  return (
    <div>
      {context.todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              onChange={() =>
                context.todoDispatch(updateTodo({ ...todo, completed: !todo.completed }))
              }
              checked={todo.completed}
            />
            <input
              type="text"
              value={todo.task}
              disabled={!todo.edit}
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
              onChange={(e) => {
                context.todoDispatch(updateTodo({ ...todo, task: e.target.value }));
              }}
            />
            <button
              onClick={() => {
                context.todoDispatch(updateTodo({ ...todo, edit: !todo.edit }));
              }}
            >
              {!todo.edit ? "Edit" : "Save"}
            </button>
            <button
              onClick={() => {
                context.todoDispatch(deleteTodo({ ...todo }));
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
