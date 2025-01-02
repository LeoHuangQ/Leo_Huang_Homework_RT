import { act } from "react";

const initialState = [
  { id: 1, task: "test 1", completed: false, edit: false },
  { id: 2, task: "test 2", completed: false, edit: false },
];

const todo_options = {
  add: "TODO_ADDED",
  update: "TODO_UPDATE",
  delete: "TODO_DELETE",
  remove: "TODO_REMOVE"
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case todo_options.add:
      return [...state, action.payload];
    case todo_options.update:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            task: action.payload.task,
            completed: action.payload.completed,
            edit: action.payload.edit,
          };
        }
        return todo;
      });
    case todo_options.delete:
      console.log('delete',action.payload)
      return state.filter((todo) => todo.id !== action.payload.id);
    case todo_options.remove:
      return state.filter((todo)=> todo.completed !== true);
    default:
      return state;
  }
}

export const addTodo = (payload) => {
  return { type: todo_options.add, payload };
};

export const updateTodo = (payload) => {
  return { type: todo_options.update, payload };
};

export const deleteTodo = (payload) => {
  return { type: todo_options.delete, payload };
};

export const removeTodo = () => {
  return { type: todo_options.remove };
};
