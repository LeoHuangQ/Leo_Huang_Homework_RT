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
// write a promise-based function that return a random number after a delay
// use Promise.all to write an example


