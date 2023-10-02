// How to check if an object is present in an Array or not?

const arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  const object1 = { id: 2, name: "Jane" };
const object2 = { id: 4, name: "Alice" };

console.log(arr.includes(object1))