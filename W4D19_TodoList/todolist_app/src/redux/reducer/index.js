import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import countReducer from "./countReducer";
 

const rootReducer = combineReducers({
  todos: todosReducer,
  count: countReducer,
});

export default rootReducer;