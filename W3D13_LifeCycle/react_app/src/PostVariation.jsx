import { useEffect, useState } from "react";

export default function PostVariation() {
  const [postId, setPostId] = useState(0);
  const [postInfo, setPostInfo] = useState("");
  const [dataValid, setDataValid] = useState(true);

  const fetchPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId+1}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.body){
            setPostId(postId + 1);
            setPostInfo(data.body);
        }else{
            setDataValid(false);
        }
        
      });
  };
  const fetchNext = () => {
    
    setTimeout(() => {
        fetchPost();
    }, 100);
  };
  useEffect(() => {
    if (dataValid) {
      fetchNext();
    }
  });
//   useEffect(() => {
   
//       fetchPost();
    
//   }, []);
  return (
    <>
      <div>
        <h3>Load post in 10 second</h3>
        <p>Current Post ID is: {postId}</p>
        <p style={{ width: "300px" }}>{postInfo}</p>
      </div>
    </>
  );
}
