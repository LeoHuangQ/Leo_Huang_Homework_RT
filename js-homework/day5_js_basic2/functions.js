export function sum(a=0, b=0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  // return () => {};
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid argument: Both arguments must be numbers.");
  }
  return a + b;
}

export function sumOfAll(...args) {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  // return () => {};
  if (!args.every(arg => typeof arg === "number")) {
    throw new Error("Invalid argument: All arguments must be numbers.");
  }
  return args.reduce((total, current) => total + current, 0);
}
