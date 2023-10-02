function callbackFunction() {
  console.log("Hello Callback");
}

setTimeout(callbackFunction, 4000);

const helloWorld = () => {
  setTimeout(() => {
    console.log("first");
  }, 2000);
};

helloWorld();


