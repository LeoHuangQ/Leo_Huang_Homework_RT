import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
// import { thunk } from "redux-thunk";

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer);

export default store;
