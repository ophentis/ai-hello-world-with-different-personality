const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const identity = x => x;
const concat = (a, b) => a + b;
const prepend = (prefix, str) => prefix + str;

const greet = compose(
  str => concat("Hello", concat(" ", str)),
  identity
);

const result = greet("World");
console.log(result);
