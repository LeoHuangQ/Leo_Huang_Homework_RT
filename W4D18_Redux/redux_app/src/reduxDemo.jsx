import { useSelector, useDispatch } from "react-redux";
import { buyCake, makeCake } from "./reduxStore.jsx";
import { buyCakeToolkit, makeCakeToolkit } from "./reduxStore.jsx";

export default function reduxDemo(){
    const count = useSelector((store)=> store.numOfCakes);
    const dispatch = useDispatch();

    return <div>
        <label>Count of cakes: {count}</label>
        <button onClick={()=> dispatch(makeCakeToolkit()) }>Make by toolkit</button>
        <button onClick={()=> dispatch(makeCake()) }>Make</button>
    </div>
}