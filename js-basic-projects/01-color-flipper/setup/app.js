const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let index = 0;
const btn = document.querySelector("#btn");
const container = document.querySelector("main");
const span = document.querySelector(".color");

btn.addEventListener('click', ()=>{
    container.style.backgroundColor = colors[index];
    span.innerHTML = colors[index];
    index ++;
    if (index >= colors.length) index = 0;
})