// reinvent the wheel: prototype methods

export function myMap(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with the callback applied to each element.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myMap(arr, num => num * 2);
  // Expected output: [2, 4, 6, 8, 10]
  let newArr = [];
  for (let i of arr){
    newArr.push( cb(i));
  }
  return newArr;
}

export function myFilter(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with only the elements that return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFilter(arr, num => num % 2 === 0);
  // Expected output: [2, 4]
  let newArr = [];
  for (let i of arr){
    if (cb(i)){
      newArr.push(i);
    }
  }
  return newArr;
}

export function myConcat(arr1, arr2) {
  // Write a function that takes two arrays as arguments
  // and returns a new array with the elements of both arrays.
  // Example: const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // myConcat(arr1, arr2);
  // Expected output: [1, 2, 3, 4, 5, 6]
  let newArr = [];
  for (let i = 0; i < arr1.length; i++){
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++){
    newArr.push(arr2[i]);
  }
  return newArr;
}

export function myFind(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns the first element that returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFind(arr, num => num % 2 === 0);
  // Expected output: 2
  let res = -1;
  for (let i of arr){
    if (cb(i)){
      res = i;
      break;
    }
  }
  return res;
}

export function myEvery(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if all the elements return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myEvery(arr, num => num > 0);
  // Expected output: true
  let res = true;
  for (let i of arr){
    if (!cb(i)){
      res = false;
      break;
    }
  }
  return res;
}

export function mySome(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if at least one element returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySome(arr, num => num % 2 === 0);
  // Expected output: true
  let res = false;
  for (let i of arr){
    if (cb(i)){
      res = true;
      break;
    }
  }
  return res;
}

export function myIncludes(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns true if the value is in the array.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myIncludes(arr, 3);
  // Expected output: true
  let res = false;
  for (let i of arr){
    if (i === val){
      res = true;
      break;
    }
  }
  return res;
}

export function myJoin(arr, separator) {
  // Write a function that takes an array and a separator as arguments
  // and returns a string with the elements joined by the separator.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myJoin(arr, '-');
  // Expected output: '1-2-3-4-5'
  if(arr.length <= 1) return String(arr[0]);
  let res = String(arr[0]);
  for(let i = 1; i < arr.length; i++){
    res = res + "-" + arr[i];
  }
  return res;
}

export function myPush(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns the array with the value added to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myPush(arr, 6);
  // Expected output: [1, 2, 3, 4, 5, 6]
  arr.push(val);
  return arr;
}

export function myReverse1(arr) {
  // Write a function that takes an array as an argument
  // and returns a new array with the elements reversed.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReverse(arr);
  // Expected output: [5, 4, 3, 2, 1]
  let res = [];
  for(let i = arr.length - 1; i >= 0; i--){
    res.push(arr[i]);
  }
  return res;
}

export function myReverse2(arr) {
  // Same as above but this time returns the original array reference reversed.
  return arr.reverse();
}

// Challenges
export  function myReduce(arr, cb, initial=0) {
  // Write a function that takes an array, a callback and an initial value as arguments
  // and returns a single value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReduce(arr, (acc, num) => acc + num, 0);
  // Expected output: 15
  let res = initial;
  for(let i = 0; i < arr.length; i++){
    res = cb(res, arr[i]);
  }
  return res;
}

export function mySort(arr, cb) {
  // Write a function that takes an array of NUMBERS and a callback as arguments
  // and returns a new array sorted by the callback.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySort(arr, (a, b) => a - b);
  // Expected output: [1, 2, 3, 4, 5]
  if (!Array.isArray(arr) || !arr.every(num => typeof num === "number")) {
    throw new Error("Invalid input: first argument");
  }
  if (typeof cb !== "function") {
      throw new Error("Invalid input: Second argument");
  }
  return [...arr].sort(cb);
}

export function mySlice(arr, start, end) {
  // Write a function that takes an array, a start index and an end index as arguments
  // and returns a new array with the elements sliced from the start to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySlice(arr, 1, 3);
  // Expected output: [2, 3]

  // learn fro GPT
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input: First argument must be an array.");
  }
  const result = [];
  const len = arr.length;

  const normalizedStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  const normalizedEnd = end === undefined
      ? len
      : end < 0
      ? Math.max(len + end, 0)
      : Math.min(end, len);

  for (let i = normalizedStart; i < normalizedEnd; i++) {
      result.push(arr[i]);
  }

  return result;
}
