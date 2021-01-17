import { useState } from "react";

export default function useCounter(initialValue, numberToAdd) {
  const [counter, setCounter] = useState(initialValue, numberToAdd);

  function incrementNumber(numberToAdd) {
    setCounter(counter + numberToAdd);
  }

  return {
    counter,
    incrementNumber,
  };
}
