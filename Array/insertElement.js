// How can you Insert an element at a specific index in an Array in js?

const array = ["apple", "banana", "orange", "peach"];
const index = 1; // insert at index 2
const element = "grape"; // element to insert

array.splice(1, 0, element);
console.log(array);

let webDevelop = ["HTML", "CSS", "JS", "Bootstrap"];

console.log(webDevelop);

// Add 'React_Native' and 'Php' after removing 'JS'.

webDevelop.splice(2, 1, "React Native", "PHP");

console.log(webDevelop);
