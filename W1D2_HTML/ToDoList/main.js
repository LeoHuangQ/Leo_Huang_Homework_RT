const addButton = document.querySelector('#addBtn');
addButton.addEventListener("Click", addListItem);


const inputText = document.querySelector('#inputText');
const todoList = document.querySelector('#todoList');


const liTemplate = "<li>{!Text!}<button class='removeBtn' onclick='removeClick'>-</button></li>";
function addListItem(){
    const inputTextValue = inputText.value.trim();
    if(inputTextValue == ''){
        return;
    }
    const newLi = document.createElement('li');
    newLi.textContent = inputTextValue;
    const newBtn = document.createElement('button');
    newBtn.innerText = "-";
    newBtn.addEventListener('click', function(){
        todoList.removeChild(newLi);
    });
    newLi.appendChild(newBtn);
    todoList.appendChild(newLi);
    inputText.value = '';

}
