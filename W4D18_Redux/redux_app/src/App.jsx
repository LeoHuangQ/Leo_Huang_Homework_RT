import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReduxDemo from "./reduxDemo";
import ReduxDemo2 from "./reduxDemo2";
import { Provider } from "react-redux";
import store, { storeToolkit } from "./reduxStore.jsx";

function App() {
  return (
    <div>
      <Provider store={storeToolkit}>
        <ReduxDemo />
        <ReduxDemo2 />
      </Provider>
      <Provider store={store}>
        <ReduxDemo />
        <ReduxDemo2 />
      </Provider>
    </div>
  );
}

export default App;
