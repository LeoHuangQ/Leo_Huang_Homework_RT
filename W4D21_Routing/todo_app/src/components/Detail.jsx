import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  //   const query = new URLSearchParams(useLocation().search);
  //   console.log(useParams(), useLocation().search);
  useEffect(() => {
    fetch(`http://localhost:3000/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const updateStatus = (id, done)=>{
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...data, completed: done}),
    })
      .then((response) => response.json())
      .then((data) => setData((todo)=>{
        return {...todo, completed: done};
      }));
  }

  return (
    <div>
      <h1>Todo detail ID: {id}</h1>
        {
      <div key={data.id}>
          <label>{data.task}</label>
          <br />
          <label>{data.completed ? 'Completed': 'Not Done'}</label>
          <br />
          <label>{data.date}</label>
          <br />
          <label>{data.description}</label>
          <br />
          <button onClick={()=> updateStatus(data.id, !data.completed)}>{data.completed ? 'Not Done': 'Mark as Done'}</button>
      </div>
        }
    </div>
  );
};

export default Detail;
