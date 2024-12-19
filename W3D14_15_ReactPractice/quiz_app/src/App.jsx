import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "The answer is A with 2 scores",
      option1: "A",
      option2: "B",
      option3: "C",
      option4: "D",
      answer: "A",
      score: 2,
    },
    {
      id: 2,
      title: "The answer is B with 5 scores",
      option1: "A",
      option2: "B",
      option3: "C",
      option4: "D",
      answer: "B",
      score: 5,
    },
    {
      id: 3,
      title: "The answer is C with 3 scores",
      option1: "A",
      option2: "B",
      option3: "C",
      option4: "D",
      answer: "C",
      score: 3,
    },
    {
      id: 4,
      title: "The answer is D with 90 scores",
      option1: "A",
      option2: "B",
      option3: "C",
      option4: "D",
      answer: "D",
      score: 90,
    },
  ]);
  const [totalScore, setTotalScore] = useState(0);
  const [curTotalScore, setCurTotalScore] = useState(0);
  const [resultLabel, setResultLabel] = useState(false);
  const [result, setResult] = useState({});

  const btnSubmit = () => {
    setResultLabel(true);
  };

  const btnChange = (event)=>{
    const optionID = event.target.name;
    const optionValue = parseInt(event.target.value);
    setCurTotalScore(curTotalScore - result[optionID] + optionValue);
    // use [] to add attribut name into useState to set value
    setResult({...result, [optionID]: optionValue});
  };
  useEffect(()=>{
    const initResult = {};
    setTotalScore(questions.reduce((sum, question)=>{
       sum = sum + question.score;
       // can not use result as variable as it is not refresh until all states are updated.
      //  setResult({...result, [question.id]: 0});
      initResult[question.id] = 0;
       return sum;
    }, 0));
    setResult(initResult);
  }, [])

  return (
    <div className="container">
      <div className="quiz"><h1>Quiz</h1></div>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <h3>{question.id + ". " + question.title}</h3>
            <div className="questionContainer">
              <div>
                <input
                  id={question.id + "option1"}
                  name={question.id}
                  type="radio"
                  value={
                    question.option1 == question.answer ? question.score : 0
                  }
                  onChange={btnChange}
                />
                {/* <label for={question.id + "option1"}> */}
                  {question.option1}
                  {/* </label> */}
              </div>
              <div>
                <input
                  id={question.id + "option2"}
                  name={question.id}
                  type="radio"
                  value={
                    question.option2 == question.answer ? question.score : 0
                  }
                  onChange={btnChange}
                />
                {/* <label for={question.id + "option2"}> */}
                  {question.option2}
                  {/* </label> */}
              </div>
              <div>
                <input
                  id={question.id + "option3"}
                  name={question.id}
                  type="radio"
                  value={
                    question.option3 == question.answer ? question.score : 0
                  }
                  onChange={btnChange}
                />
                {/* <label for={question.id + "option3"}> */}
                  {question.option3}
                  {/* </label> */}
              </div>
              <div>
                <input
                  id={question.id + "option4"}
                  name={question.id}
                  type="radio"
                  value={
                    question.option4 == question.answer ? question.score : 0
                  }
                  onChange={btnChange}
                />
                {/* <label for={question.id + "option4"}> */}
                  {question.option4}
                  {/* </label> */}
              </div>
            </div>
          </div>
        );
      })}
      <br />
      <button onClick={btnSubmit}>Submit</button>
      <br />
      <label style={{display: resultLabel ? 'block' : 'none'}}>
        Quiz Complete! Your scored {curTotalScore} out of {totalScore} !
      </label>
    </div>
  );
}

export default App;
