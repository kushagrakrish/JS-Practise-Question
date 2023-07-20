const newPromise = () => {
  return newPromise((resolve, reject) => {
    const error = true;
    if (!error) {
      console.log("The promise is resloved");
      resolve();
    } else {
      console.log("The promise is rejected");
      reject();
    }
  });
};

newPromise()
  .then(() => {
    console.log("this will work if the promise is resolved");
  })
  .catch(() => {
    console.log("it will work if promise is rejected");
  });

const fetchData = async () => {
  let url = "";
  try {
    const response = await fetch(url);
    const data = response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
