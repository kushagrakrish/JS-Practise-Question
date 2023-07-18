function newTimes() {
  return setInterval(() => {
    const time = new Date();
    console.log(time.toLocaleTimeString());
  }, 200);
}

// newTimes();

// Reverse a string
function reverseString(str) {
  return str.split("").reverse();
}
console.log(reverseString("hello"));

const arr = [1, 2, 3, 4, 5, 6];

const reverseArray = (arr) => {
  return arr.reverse();
};
console.log(reverseArray(arr));

// Reverse each word in a sectence

function reverseWords(sentence) {
  const words = sentence.split(" ");

  const reverseWords = words?.map((word) => {
    return word.split("").reverse().join();
  });
  return reverseWords;
}

console.log(reverseWords("My Name is Kushagra"));

const slicedArray = arr.slice(1, 3);
console.log(slicedArray);

// remove three items 2 from array
// arr.slice(1, 2);
// console.log(arr);

// console.log(number.slice(0, 4));
const number = [1, 2, 3, 4, 5, 6, 4, 6, 5, 5];

const newArr = number.splice(number.length, 0, 1);
console.log(newArr);

const name = ["Kushagra", "manish", "Joy", "Ram"];

let newNames = name.splice(2, 1, "anshu");
console.log(name);
console.log(name.slice(0, 2));

const sum = number.reduce((x, y) => x + y);
console.log(sum);

const unique = new Set(number);
console.log([...unique]);

function uniqueNum(number) {
  return number.filter((item, index) => number.indexOf(item) === index);
}
console.log(uniqueNum(number));

// To Swap values
let x = 12;
let y = 22;

// swap x to y
[x, y] = [y, x];
console.log(x, y);
