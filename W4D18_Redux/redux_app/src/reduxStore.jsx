import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const BUY_CAKE = "buy_cake";
const MAKE_CAKE = "make_cake";

export function buyCake() {
  return {
    type: BUY_CAKE,
    info: "redux action - buy",
  };
}

export function makeCake() {
  return {
    type: MAKE_CAKE,
    info: "redux action - make",
  };
}

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case MAKE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    default:
      return state;
  }
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCakeToolkit: (state) => {
      state.numOfCakes -= 1;
    },
    makeCakeToolkit: (state) => {
      state.numOfCakes += 1;
    },
  },
});

export const { buyCakeToolkit, makeCakeToolkit } = cakeSlice.actions;

const storeToolkit = configureStore({ reducer: cakeSlice.reducer, });
const store = createStore(reducer);
export default store;
export  {storeToolkit};
