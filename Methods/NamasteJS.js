// // Closures in JS
// function x() {
//   var a = 3;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// // x();

// // Here a in not present in function y but still console value of a because it searches for a in func y so it is not presnet so it goes to its lexical  parent which is x so here it fiunds the value of x

// // Print 1 to 6 after every section

// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// // x();

// // Reason to choose let is let is block scope so every time when setTimeout is called so the functions forms a closuer witha  new variable every time

// // First Class Function
// // Function Statement
// // a();
// // b();
// function a() {
//   console.log("a called");
// }
// a();
// // Function Express is when we assigned a function to a variable is called function expression

// var b = function () {
//   console.log("b called");
// };
// b();

// // Anonoysms  function
// // function(){

// // }

// // Named Function Express is like function expression but this function has a name
// var z = function xx() {
//   console.log("z  calledd");
// };
// z();

// // Parameter and Argument
// function sum(param1, param2) {
//   return param1 + param2;
// }

// console.log(sum(2, 3));

// // First class function

// // Callback function in JS
// // Continue from tommaro


function x(){
    var a=5
    function y(){
        console.log(a)
    }
    return y()
}

x()