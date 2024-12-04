const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  if (people.length == 0) return 0;
  let total = 0;
  let len = 0;
  for (let p of Object.values(people)){
    total += p.age;
    len += 1;
  }
  return total / len;
};
