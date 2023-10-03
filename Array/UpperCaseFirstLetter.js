const arr = ["avinash", "kushagra", "chirag", "yash"];

const upperCaseFirstLetter = (arr) => {
  return arr.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
};

console.log(upperCaseFirstLetter(arr));
