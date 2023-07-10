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

//
const add = eval("10*10+5");
console.log(add);

//
sessionStorage.setItem("cool_secret", 123);

const obj = {
  1: "a",
  2: "b",
  3: "c",
};

console.log(obj.hasOwnProperty(1));
console.log(obj.hasOwnProperty("1"));
// If key is numeric you can check by string or num as well
// but if it a name ex hello thenit should be in string
// eg. console.log(obj.hasOwnProperty('hello));

const newObj = {
  a: "one",
  b: "two",
  a: "repeat",
};
console.log(newObj);

// the value ogf a will get overwritten but it will have a same position at number 1
// 20

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// 21

// const foo = () => console.log("first");
// const bar = () => setTimeout(() => console.log("second"));
// const buz = () => console.log("third");

// bar();
// foo();
// buz();

// Output will be first,third,second bc
// "second" is printed last, even though it was called before buz(), due to the asynchronous nature of setTimeout. The setTimeout function schedules the execution of its callback function (which logs "second") after a specified delay (or in this case, zero delay). Since the callback is executed asynchronously, it waits until the main code block is completed and then logs "second" to the console.

// 22

const person = { name: "Kush" };
function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 52));
console.log(sayHi.bind(person, 52));

// 23

// function sayHello() {
//   return (() => 0)();
// }
// console.log(typeof sayHello());
// Output will be number

// 24

function sayHello() {
  return () => 0;
}
console.log(typeof sayHello());

//
// The sayHello function is called, and its return value is passed as an argument to the typeof operator.
// Since the return value of sayHello is an arrow function, the typeof operator is applied to the arrow function itself.

// 25

console.log(typeof typeof 1);

// Output will be string because first JS engine evaluataes type of 1 which is a number then the type of number is calculated whioch gives string

// 26

const number = [1, 2, 3];
number[3] = number;
console.log(number);

// This will give a infinte array on third postion same array because we are assigning same array to the third position

// 27

// Everything is JS is primitive type or Object type

// 58

console.log(!!null);
console.log(!!"");
console.log(!!1);

// false false true initially null is considered false same as "" is also false initially
