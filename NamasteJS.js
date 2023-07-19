// Closures in JS
function x() {
  var a = 3;
  function y() {
    console.log(a);
  }
  y();
}
x();

// Here a in not present in function y but still console value of a because it searches for a in func y so it is not presnet so it goes to its lexical  parent which is x so here it fiunds the value of x

// Print 1 to 6 after every section

function x() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
x();

// Reason to choose let is let is block scope so every time when setTimeout is called so the functions forms a closuer witha  new variable every time
