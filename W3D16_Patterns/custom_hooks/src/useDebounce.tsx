import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number) {
  const [valueDebounce, setValueDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValueDebounce(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return valueDebounce;
}
