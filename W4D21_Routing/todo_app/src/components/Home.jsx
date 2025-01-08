import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Home Page - Todo List</h1>
      <div>
        <ul>
          {data.map((todo) => {
            const linkAddress = `/detail/${todo.id}`;
            return (
              <li key ={todo.id}>
                <Link key={todo.id} to={linkAddress} >
                  {todo.task} - {todo.completed ? "Completed" : "Not Done"}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
