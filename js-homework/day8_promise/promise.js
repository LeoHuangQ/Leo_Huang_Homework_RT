export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  // return the posts
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  return data;
};

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("data", data);
//   });

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}` );
  let data = await res.json();
  return data;
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]

  const results = [];
  // order.forEach((orderId)=>{
  //   let res = await promises(orderId);
  //   results.push(res);
  // })

  // can not use await inside the forEach callback function !!!!!!
  for (let i = 0 ; i < order.length; i ++){
    const orderId = order[i];
    try{
      // promise is not a function, no need to add ()
      const result = await promises[orderId - 1];
      results.push(result);

    }catch(e){
       throw new Error('error').message;
      
    }
  }
  return results;
};
