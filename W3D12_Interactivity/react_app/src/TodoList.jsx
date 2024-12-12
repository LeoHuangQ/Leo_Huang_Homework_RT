import React from "react";
import { useState } from "react";

export default function TodoList(){
    
    const inputText = document.querySelector('#inputText');
    const todoList = document.querySelector('#todoList');
    const [inputValue, setInputValue] = new useState('');

    function addListItem(){
        const inputTextValue = inputValue.trim();
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
    return (
        <div>
        <h1>To Do List</h1>
        <input id="inputText" 
        placeholder="input todo item..." 
        value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)}/>
        <button id = "addBtn" onClick={addListItem}>+</button>
        <br/>
        <ul id="todoList">
            
        </ul>
    </div>
    )
}