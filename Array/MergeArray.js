//Merging array in JS in one array

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//...arr is used as params bc it can accept any number of argument
function mergeArray(...arr) {
  let newArray = [];
  newArray = newArray.concat(...arr);
  return newArray;
}

console.log(mergeArray(arr1, arr2));

const arr3 = [...arr1, ...arr2];
console.log(arr3);
