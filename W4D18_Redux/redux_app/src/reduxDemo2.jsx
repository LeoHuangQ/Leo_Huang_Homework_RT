import { useSelector, useDispatch } from "react-redux";
import { buyCake, makeCake } from "./reduxStore";
import { buyCakeToolkit, makeCakeToolkit } from "./reduxStore.jsx";

export default function reduxDemo2 (){
    const count = useSelector((store)=> store.numOfCakes);
    const dispatch = useDispatch();

    return <div>
        <button onClick={()=> dispatch(buyCakeToolkit()) }>Buy by toolkit</button>
        <button onClick={()=> dispatch(buyCake()) }>Buy</button>
    </div>
}