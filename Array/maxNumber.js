// Find maximum number in array or you can do is sort array and return last element
const arr = [3, 7, 1, 9, 200, 4, 6];

function findMaxNumber(arr) {
  return Math.max(...arr);
}

console.log(findMaxNumber(arr));
