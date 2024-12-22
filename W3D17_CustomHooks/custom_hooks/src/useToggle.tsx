import { useState } from "react";

type UseToggleOptions<T> = T[] | undefined;
export default function useToggle<T>(
  options?: UseToggleOptions<T>
): [T, () => void] {
  const optionProvided = options && options.length >= 0;
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggle = () => {
    if (optionProvided) {
      setCurrentIndex((previous) => {
        return (previous + 1) % options.length;
      });
    } else {
      setCurrentIndex((previous) => {
        return previous === 0 ? 1 : 0;
      });
    }
  };
  const curValue = optionProvided? options[currentIndex] : currentIndex === 0? false: true;
  return [curValue as  T, toggle];
}
