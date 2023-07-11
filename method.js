// All the methods of JS
const characters = [
  {
    name: "kushagra",
    height: 172,
    mass: 160,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Jane",
    height: 165,
    mass: 120,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Alex",
    height: 180,
    mass: 175,
    eye_color: "green",
    gender: "male",
  },
  {
    name: "Lily",
    height: 158,
    mass: 140,
    eye_color: "hazel",
    gender: "female",
  },
  {
    name: "Max",
    height: 190,
    mass: 200,
    eye_color: "brown",
    gender: "male",
  },
];

// Filter Methods
const greaterMass100 = characters?.filter((character) => {
  return character.mass > 150;
});
console.log(greaterMass100);

// JS filter array methods returns a new array from the existing array and the returned array should consist only those elements which satisfy the given condition set by argument

// Get all male charac
const allMaleCharacter = characters?.filter((character) => {
  return character.gender === "male";
});
console.log(allMaleCharacter);

// Map Method

// Generally, the map() method is used to iterate over an array and calling function on every element of the array.
// Map methods accepts two value as params which is a current value and a index and returns a new array

// Get array of all name
const allName = characters?.map((character) => {
  return character.name;
});
console.log(allName);

// Get Array of objects with just name and hegiht
const minifiedRecord = characters?.map((character) => {
  return { name: character.name, height: character.height };
});
console.log(minifiedRecord);

// Get first name in array
const firstName = characters?.map((character) => {
  return character.name.split(" ")[0];
});
console.log(firstName);

const maxRecord = characters?.map((character) => {
  return {
    gender: character.gender,
    eye_color: character.eye_color,
  };
});
console.log(maxRecord);

// Some method in JS
// The Javascript arr.some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument method.

const oneMaleCharc = characters?.some((character) => {
  return character.gender === "male";
});
console.log(oneMaleCharc);

// One characr with atleast one blue eye
const oneVlueEye = characters?.some((character) => {
  return character.eye_color === "blue";
});
console.log(oneVlueEye);

// JS Sort method
const byMass = characters?.sort((a, b) => {
  return a.mass - b.mass;
});
console.log(byMass);

// Sort by name
const byName = characters?.sort((a, b) => {
  if (a.name < b.name) return 1;
  else 1;
});
console.log(byName);

const byGender = characters?.sort((a, b) => {
  if (a.gender === "female") return -1;
  else -1;
});
console.log(byGender);

// Reduce Method JS
// calculate total mass
const totalMass = characters?.reduce((acc, cur) => {
  return acc + cur.mass;
}, 0);

console.log(totalMass);

// Total Name character
const totalName = characters?.reduce((acc, cur) => {
  return acc + cur.name.length;
}, 0);

console.log(totalName);

// The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator.
