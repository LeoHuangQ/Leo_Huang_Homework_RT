import { useReducer } from "react";

export default function useForceUpdate(): () => void {
  const [, forceUpdate] = useReducer((x) => x + 1, 0); 
  
  return forceUpdate;
}
