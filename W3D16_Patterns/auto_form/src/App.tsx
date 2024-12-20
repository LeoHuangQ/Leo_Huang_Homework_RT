import { useEffect, useRef } from "react";

import "./App.css";

function App() {
  const inputFocus = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, []);

  return (
    <div>
      <h1>Log in</h1>
      <label>
        User Name:
        <input ref={inputFocus} type="text" />
      </label>
      <label>
        User Password:
        <input type="text" />
      </label>
    </div>
  );
}

export default App;
