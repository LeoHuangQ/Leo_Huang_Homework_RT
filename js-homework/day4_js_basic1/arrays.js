// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
  return !isNaN(Number(str));
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  //let total = arr.reduce((total, items) =>  total + Number(items), 0);
  // if (arr.length == 0) return 0;
  let total = 0;
  for (let i of arr){
    if (!isNaN(Number(i))){
      total += Number(i);
    }
  }
  return total / arr.length;
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
  if (people.length == 0) return 0;
  let total = 0;
  for (let i = 0; i < people.length; i ++){
    total += people[i].age;
  }
  return total/people.length;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
  let total = 0;
  let count = 0;
  for (let i = 0; i < people.length; i ++){
    if (people[i].job === job){
      total += people[i].age;
      count ++;
    }
  }
  if (count == 0) return 0;
  return total/count;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  if (arr.length == 0) return 0;
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++){
    if (arr[i] > maxNum) maxNum = arr[i];
  }
  return maxNum;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  const strList = str.split(" ");
  let longest = strList[0];
  for (let i  of strList){
    if (i.length > longest.length) longest = i;
  }
  return longest;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  let res = [];
  for (let i = 1; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      res.push(arr[i]);
    }
  }
  return res;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  let swap = false;
  let newArr = [...num];
  for (let i =0; i < newArr.length; i++){
    swap = false;
    for(let j = 0; j < newArr.length - i - 1; j ++){
      if (newArr[j] > newArr[j + 1]){
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
        swap = true;
      }
    }
      if (swap == false) break;

  }
  // let newArr = JSON.parse(JSON.stringify(num));
  return newArr;
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
  let swap = false;
  for (let i =0; i < num.length; i++){
    swap = false;
    for(let j = 0; j < num.length - i - 1; j ++){
      if (num[j] > num[j + 1]){
        let temp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = temp;
        swap = true;
      }
    }
      if (swap == false) break;

  }
  return num;
}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
  let newArr = [];
  for (let i =0; i < arr.length; i ++){
    if ( typeof arr[i] != typeToRemove){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  for (let i = 0; i < nums.length; i++){
    switch(operator){
      case "+": nums[i] += amount; break;
      case "-": nums[i] -= amount; break;
      case "*": nums[i] *= amount; break;
      case "/": nums[i] /= amount; break;
    }
  }
  return nums;
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
  let newArr = [];
  for (let i =0; i < nums.length; i ++){
    if ( nums[i] !== num){
      newArr.push(nums[i]);
    }
  }
  return newArr;
}
