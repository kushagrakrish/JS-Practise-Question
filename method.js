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

// JS array methods returns a new array from the existing array and the returned array should consist only those elements which satisfy the given condition set by argument

// Get all male charac
const allMaleCharacter = characters?.filter((character) => {
  return character.gender === "male";
});
console.log(allMaleCharacter);
