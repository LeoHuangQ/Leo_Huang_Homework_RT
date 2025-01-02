import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo, removeTodo } from "../../redux/reducer/todosReducer";

export default function TodoItem() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log("todos in remove", todos);
  const removeChecked = ()=>{
    dispatch(removeTodo())
  }
  return (
    <div>
      <button onClick={removeChecked}>Remove checked X</button>
    </div>
  );
}
