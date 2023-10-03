const strArray = ["apple", "banana", "orange", "pear", "kiwi"];

function sortArrayOfString(arr) {
  return arr.sort((a, b) => b.localeCompare(a));
}

console.log(sortArrayOfString(strArray));

const sortedArray = [];

for (let i = 0; i < strArray.length; i++) {
  const index = sortedArray.findIndex((element) => element > strArray[i]);
  if (index === -1) {
    sortedArray.push(strArray[i]);
  } else {
    sortedArray.splice(index, 0, strArray[i]);
  }
}

console.log(sortedArray);
