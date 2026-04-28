// Every child is an artist
// The problem is how to remain an artist once we grow up

const perspectives = ["front", "side", "above", "inside"];
const message = "Hello, World!";

// See it from all angles at once — that is cubism
const cubist = perspectives.map(p => "(" + p + ": " + message + ")");
console.log(message);
console.log("From all perspectives: " + cubist.join(" "));
