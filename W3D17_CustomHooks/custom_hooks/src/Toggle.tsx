import useToggle from "./useToggle";

export default function Toggle() {
  const [trueFalse, setTrueFalse] = useToggle();
  const [color, setColor] = useToggle(["red", "green", "blue"]);

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={setColor}
      >set color</button>
      <button onClick={setTrueFalse}>{trueFalse? 'true': 'false'} </button>
    </div>
  );
}
