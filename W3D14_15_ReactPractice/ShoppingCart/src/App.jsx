import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [listItems, setListItems] = useState([]);
  const [total, setTotal] = useState(0);

  const itemList = ()=>{
    return (
      [
      {name: 'Apple', price: 0.99, count: 0},
      {name:'Banana', price: 0.49, count: 0},
      {name: 'Mongo', price: 1.99, count: 0},
      {name: 'Strawberry', price: 2.49, count: 0},
      ]
    )
  }

  useEffect(()=>{
    setListItems(itemList());
  },[])
  // const buildList = (items)=>{

  //   return (
  //       items.map((item)=>{
  //         let nameKey = item.key;
  //         let nameCount = nameKey + 'Count';
  //         let [nameKey, setName] = useState(item.value);
  //         let [nameCount, setPrice] = useState(0);
  //         return (
            
  //           <tr>
  //             <td>
  //               {item.key}
  //             </td>
  //             <td>
  //               {item.value}
  //             </td>
  //             <td>
  //               <button>-</button>
  //               <label key={nameKey}>{nameCount}</label>
  //               <button>+</button>
  //             </td>
  //           </tr>
  //         )
  //       })
  //   );
  // }
  const buttonClickPlus = (key)=>{
    setListItems((pre)=>{
      return pre.map((item)=>{
        if (item.name === key){
          setTotal(Math.round((total + item.price)*100)/100);
          return {...item, count: item.count + 1};
        }
        return item;
      })
    })
  }

  const buttonClickMinus = (key)=>{
    setListItems((pre)=>{
      return pre.map((item)=>{
        if (item.name === key && item.count > 0){
          setTotal(Math.round((total - item.price)*100)/100);
          return {...item, count: item.count - 1};
        }
        return item;
      })
    })
  }
  const buttonReset = ()=>{
    setTotal(0);
    setListItems((pre)=>{
      return  pre.map((item)=>{
                return {...item, count: 0};
              })
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
          listItems.map((item)=>{
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={()=>buttonClickMinus(item.name)}>-</button>
                  <label>{item.count}</label>
                  <button onClick={()=>buttonClickPlus(item.name)}>+</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div><h3>Total Price: ${total}</h3></div>
      <div>
        <button>Checkout</button>
        <button onClick={buttonReset}>Empty Cart</button>
      </div>
    </div>
  )
}

export default App
