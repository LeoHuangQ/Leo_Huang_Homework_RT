import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [cellValue, setCellValue] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
    { id: 9, value: "" },
  ]);
  const [XO, setXO] = useState(true);
  const [winner, setWinner] = useState('');

  const checkWinner =()=>{
    if (cellValue[0].value === cellValue[1].value && cellValue[1].value === cellValue[2].value){
      setWinner(cellValue[0].value );
    }
    if (cellValue[3].value === cellValue[4].value && cellValue[4].value === cellValue[5].value){
      setWinner(cellValue[3].value );
    }
    if (cellValue[6].value === cellValue[7].value && cellValue[7].value === cellValue[8].value){
      setWinner(cellValue[6].value );
    }
    if (cellValue[0].value === cellValue[3].value && cellValue[3].value === cellValue[6].value){
      setWinner(cellValue[0].value );
    }
    if (cellValue[1].value === cellValue[4].value && cellValue[4].value === cellValue[7].value){
      setWinner(cellValue[1].value );
    }
    if (cellValue[2].value === cellValue[5].value && cellValue[5].value === cellValue[8].value){
      setWinner(cellValue[2].value );
    }
    if (cellValue[0].value === cellValue[4].value && cellValue[4].value === cellValue[8].value){
      setWinner(cellValue[0].value );
    }
    if (cellValue[2].value === cellValue[4].value && cellValue[4].value === cellValue[6].value){
      setWinner(cellValue[2].value );
    }
  }

  const divClick = (id) => {
    if (winner !== '') return;
    setCellValue((previous) => {
      
      return previous.map((cell) => {
        if (cell.value === "" && cell.id == id) {
          setXO(!XO);
          return { ...cell, value: XO ? "X" : "O" };
        }
        return cell;
      });
    });
  };
  const resetBtn = () => {
    setXO(true);
    setWinner('');
    setCellValue((previous) => {
      return previous.map((cell) => {
        return { ...cell, value: '' };
      });
    });
  };
  useEffect(()=>{
    checkWinner();
  })
  return (
    <div>
      <div className="container">
        {cellValue.map((cell) => {
          return (
            <div key={cell.id} onClick={() => divClick(cell.id)}>
              <label style={{color:cell.value === 'X'? 'red': 'green'}}>{cell.value}</label>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Winner is: {winner}</h3>
      </div>

      <button onClick={resetBtn}>Reset Game</button>
    </div>
  );
}

export default App;
