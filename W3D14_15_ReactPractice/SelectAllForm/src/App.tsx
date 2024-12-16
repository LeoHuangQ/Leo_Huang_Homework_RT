import { useState } from "react";
import "./App.css";

export default function App() {
  const [allItems, setAllItem] = useState(false);
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);

  function all_Check(event:any) {
    if (event.target.checked) {
      setAllItem(true);
      setItem1(true);
      setItem2(true);
      setItem3(true);
    } else {
      setAllItem(false);
      setItem1(false);
      setItem2(false);
      setItem3(false);
    }
  };
  function item1_Check(event:any) {
    if (event.target.checked) {
      setItem1(true);
      if (item3 && item2){
        setAllItem(true);
      }
    } else {
      setItem1(false);
      setAllItem(false);
      
    }
  };
  function item2_Check(event:any) {
    if (event.target.checked) {
      setItem2(true);
      if (item1 && item3){
        setAllItem(true);
      }
    } else {
      setItem2(false);
      setAllItem(false);
      
    }
  };
  function item3_Check(event:any) {
    if (event.target.checked) {
      setItem3(true);
      if (item1 && item2){
        setAllItem(true);
      }
    } else {
      setItem3(false);
      setAllItem(false);
    }
  };

  return (
    <div>
      <h2>All the selected Items:</h2>
      <label>
        {item1 ? "item1 " : ""}
        {item2 ? "item2 " : ""}
        {item3 ? "item3 " : ""}
      </label>
      <dl>
        <dd>
          <input
            type="checkbox"
            id="selectAll"
            checked={allItems}
            onChange={all_Check}
          ></input>
          <label htmlFor="selectall">SelectAll</label>
        </dd>
        <ul>
          <dd>
            <input type="checkbox" id="item1" checked={item1} onChange={item1_Check}></input>
            <label htmlFor="item1">item1</label>
          </dd>
          <dd>
            <input type="checkbox" id="item2" checked={item2} onChange={item2_Check}></input>
            <label htmlFor="item2">item2</label>
          </dd>
          <dd>
            <input type="checkbox" id="item3" checked={item3} onChange={item3_Check}></input>
            <label htmlFor="item3">item3</label>
          </dd>
        </ul>
      </dl>
    </div>
  );
}
