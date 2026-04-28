// Found this on Stack Overflow - https://stackoverflow.com/questions/...
// method 1: simple concat
var greeting = "Hello" + " " + "World";
console.log(greeting);

// // method 2: using array (from some blog)
// var arr = ["Hello", "World"];
// console.log(arr.join(" "));

// // method 3: template literals (ES6)
// console.log(`Hello World`);

// // method 4: using reduce (overkill but saw it on GitHub)
// ["Hello", "World"].reduce((a, b) => a + " " + b);

// THIS WORKS - don't modify
function sayHello() {
  console.log("Hello World");
}
// sayHello(); // uncomment if needed

// Copied from multiple sources, not sure which is best
// const msg = (() => {
//   const words = ["Hello", "World"];
//   return words.length > 1 ? words.join(" ") : words[0];
// })();

// Alternative from ChatGPT:
// const greeting = (g, t) => `${g} ${t}`;
// console.log(greeting("Hello", "World"));

// Just using the working version
var hello = "Hello";
var world = "World";
var result = hello + " " + world;
console.log(result);
