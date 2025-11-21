setTimeout(() => {
  console.log("This message is displayed after 3 seconds");
}, 3000);


let count = 0;
const interval = setInterval(() => {
    console.log(`Interval count: ${++count}`);
    if (count === 5) {
        clearInterval(interval);
    }
}, 3000);

console.log(Object.getOwnPropertyNames(global));