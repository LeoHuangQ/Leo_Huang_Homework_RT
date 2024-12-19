import react, { useState } from "react";

export default function RNG() {
  const [num, setNum] = useState("");
  const getRandomNum = () => {
    setNum(Math.random());
  };
  return (
    <div>
      <h1> RNG</h1>
      <p>{num}</p>
      <button onClick={getRandomNum}>Give a me a number</button>
    </div>
  );
}
