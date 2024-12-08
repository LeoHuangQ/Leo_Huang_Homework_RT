const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    setTimeout(()=>{
        first.style.color = 'red';
        setTimeout(()=>{
            second.style.color = 'blue';
            setTimeout(()=>{
                third.style.color = 'green';
            }, 3000)
        }, 2000)
    }, 1000)
    
})


function getId(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            // resolve(111);
            reject("no id");
            // resolve(5555);
            
        }, 1000);
    });
}
function getValue(index){
    return new Promise((resolve, reject)=> {
        if (index === 111)  resolve(`${index}: aaa`);
        else if (index === 222)  resolve(`${index}: bbb`);
        else  reject(`${index}: no text`);
    });
}
getId() // return result , pass to the next function getValue
    .then(getValue) // 111 -> index, getValue(111) -> aaa
    .then(function(data){
        console.log('Successful', data); // aaa
    },
    function (data){
        console.log('Failed: ', data);
    }
    
).catch(err=> {
    console.log(err);
})


// use both .then and async/await to write, including error handling
// fetch API from jsonplaceholder
let getPosts = function getPostsFunc(){
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{  
            console.log("data", data);
            return data;
        })
        .catch((error) => {
                console.error("Error fetching posts:", error);
              });
}

// console.log(getPosts());
getPosts().then((data)=> console.log('function getPosts data: ' + data));

let posts = async function getPostsfunc2(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log(data);
    return data;
} 

// console.log(posts());
posts().then((data)=> console.log('function posts data: ' +data));


// write a promise-based function that return a random number after a delay
let pickNum = function randomNumber(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(Math.random());
        }, 1000);
    })
}

pickNum()
    .then((num)=>{
        console.log('Random num is: ' + num);
    })
    .catch((err)=>{
        console.log('Error mgs: '+ err);
    })

// use Promise.all to write an example
let promiseAll = async function(){
    try{
        let getA =  fetch('https://jsonplaceholder.typicode.com/posts/1')
                    .then((response)=>{
                        return response.json();
                    });
        let getB =  fetch('https://jsonplaceholder.typicode.com/posts/2')
                    .then((response)=>{
                        return response.json();
                    });
        return  Promise.all([getA, getB]).then((values)=>{
            console.log(values);
        })
    } catch(error){
        console.log('Error is: ' + error.message)
    }
}
promiseAll();

