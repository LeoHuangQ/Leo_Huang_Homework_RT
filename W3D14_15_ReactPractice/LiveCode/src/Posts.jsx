import React, { useState } from "react";

const api = "https://jsonplaceholder.typicode.com/posts";

export default function posts() {
  const [posts, setPosts] = useState([]);

  const title = "";

  const fetchApi = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();

      if (data) {
        setPosts(data);
      }
    } catch (error) {
      window.alert();
    }
  };

  const handleClick = () => {
    fetchApi();
  };

  return (
    <div>
      <button onClick={handleClick}>click me</button>

      <div>
        {posts.map((post) => {
          const { id, title } = post;
          return <p key={id}>{title}</p>;
        })}
      </div>
    </div>
  );
}
