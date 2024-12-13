import { useEffect, useState } from 'react'

function Posts() {
    const [postId, setPostId] = useState(1);
    const [postInfo, setPostInfo] = useState('');
    const fetchPost = ()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        setPostInfo(data.body);
      })
    }
    const fetchNext= ()=>{
      setPostId(postId + 1);
      fetchPost();
    }
    useEffect(()=>{
      fetchPost();
    }, [])
    return (
      <>  
      <div>
        <h3>Click to get new post</h3>
        <button onClick={fetchNext}>Click Here</button>
        <p>Current Post ID is: {postId}</p>
        <p style={{width: "300px"}}>{postInfo}</p>
      </div>
        
      </>
    )
  }
  
  export default Posts