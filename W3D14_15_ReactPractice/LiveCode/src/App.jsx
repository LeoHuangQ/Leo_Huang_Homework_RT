import { useEffect, useState } from "react";
import Posts from "./Posts";
import AllPost from "./AllPost";
import RNG from "./RNG";
import Products from "./Products";
import "./App.css";


export default function App() {
  return (
    <div className="container">
      <Products/>
      {/* <Posts /> */}
      {/* <AllPost/> */}
      {/* <RNG /> */}
    </div>
  );
}

// export default function App() {
//   const [commentId, setCommentId] = useState("");
//   const [comment, SetComment] = useState("");
//   const [commentAll, SetAllComment] = useState([]);

//   const getComment = (id) => {
//     fetch(API + `${id}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         SetComment(data.body);
//       });
//   };

//   const getAllComment = () => {
//     fetch(API)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         SetAllComment(data);
//       });
//   };

//   const inputID = (id) => {
//     setCommentId(id);
//   };

//   useEffect(() => {
//     getAllComment();
//   }, []);

//   return (
//     <div className="App">
//       <input
//         type="text"
//         value={commentId}
//         onChange={(e) => {
//           inputID(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           getComment(commentId);
//         }}
//       >
//         Submit
//       </button>
//       <p>{comment}</p>
//       <br />
//       <div>
//         {commentAll.map((comment) => {
//           const { id, name, email, body } = comment;
//           return (
//             <div key={id}>
//               <p>{id}</p>
//               <p>{name}</p>
//               <p>{email}</p>
//               <p>{body}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// https://jsonplaceholder.typicode.com/comments/1
