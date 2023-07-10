// function fruit() {
//   console.log(name);
//   console.log(price);
//   var name = "apple";
//   let price = 20;
// }
// fruit();
// console.log(fruit());

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// output will be 3 because var is global

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// the out put will be 0 1 2 bc let is function scope

// console.log(+true);
// console.log(typeof +true);

// let data = "size";
// const bird = {
//   size: "small",
// };
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

let c = { name: "Kushagra" };
let d;
d = c;
c.name = "Manan";
console.log(d.name);
// D can be reassigned and they are poinitng towards a same refrence

var x;
var x = 10;
console.log(x);

// Output x=10 var can be resinged and redecalred

// var x;
// let x = 10;
// console.log(x);

// x has already been declred in case of let

let a = 3;
let b = new Number(3);
console.log(a == b); //true
console.log(a === b); //false ,bc type of new Number is object
console.log(typeof new Number());

//
function sum(a, b) {
  return a + b;
}
console.log(sum(1 + "2"));

// let q = 0;
// console.log(q++);
// console.log(++q);
// console.log(q);

function getAge(...args) {
  console.log(typeof args);
}
console.log(getAge(21));
