const btnAsc = document.querySelector('.increase');
const btnDesc = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const curDisplayValue = document.querySelector('#value');

btnAsc.addEventListener('click',()=>{
    let curValue = Number(curDisplayValue.textContent) + 1;
    curDisplayValue.textContent = curValue;
    if (curValue > 0) {
        curDisplayValue.style.color = 'green';
    } else if (curValue < 0){
        curDisplayValue.style.color = 'red';
    } else{
        curDisplayValue.style.color = 'black';
    }

})

btnDesc.addEventListener('click',()=>{
    let curValue = Number(curDisplayValue.textContent) - 1;
    curDisplayValue.textContent = curValue;
    if (curValue > 0) {
        curDisplayValue.style.color = 'green';
    } else if (curValue < 0){
        curDisplayValue.style.color = 'red';
    } else{
        curDisplayValue.style.color = 'black';
    }

})

btnReset.addEventListener('click',()=>{
    curDisplayValue.textContent = 0;
    curDisplayValue.style.color = 'black';
})