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
        <button onClick={fetchNext}>Click to get Next</button>
        <p style={{width: "300px"}}>{postInfo}</p>
      </div>
        
      </>
    )
  }
  
  export default Posts