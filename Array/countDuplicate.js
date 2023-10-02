//// How to find the count of duplicates in an array in javascript?

// using 2 for loops
function countDuplicate(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && !result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

const arr = [1, 2, 3, 2, 4, 1, 5, 4, 6, 5];
console.log(countDuplicate(arr)); // outputs [2, 1, 5]

//Using filter and map method in javascript

const newArray = [...new Set(arr)]; //Removes duplicte values from arr
console.log(newArray);

const countDuplicateValue = newArray.map((item) => [
  item,
  arr.filter((element) => element === item).length,
]);

console.log(countDuplicateValue);

function countingDuplicateValue(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && !result.includes(arr[i])) result.push(arr[i]);
    }
  }
  return result;
}
const array = ["one", "one", "one", "two", "two", "three"];

console.log(countingDuplicateValue(arr));
