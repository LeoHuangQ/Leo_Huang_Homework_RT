const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function pickColor(){
    let color = '';
    for(let i = 0; i < 6; i++){
        let num = Math.floor(Math.random() * 16);
        color += String(hex[num]);
    }
    return "#" + color;
}

const btn = document.querySelector("#btn");
const container = document.querySelector("main");
const span = document.querySelector(".color");

btn.addEventListener('click', ()=>{
    const color = pickColor();
    container.style.backgroundColor = color;
    span.innerHTML = color;
})