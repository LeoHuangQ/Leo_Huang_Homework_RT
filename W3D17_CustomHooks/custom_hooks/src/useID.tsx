import {useRef} from "react";
import { v4 }  from "uuid";

export default function useID (id: string){
    const uuid = useRef(id===''? v4() : id)
    return uuid.current;
}