// How do you sort and reverse an array without changing the original array?
const originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const reverseDuplicateArray = (arr) => {
  const dupArr = arr;
  dupArr.sort().reverse();
  return dupArr;
};

function reverseArray(arr) {
  return arr.sort().reverse();
}

console.log(reverseDuplicateArray(originalArray));
console.log(reverseArray(originalArray));
