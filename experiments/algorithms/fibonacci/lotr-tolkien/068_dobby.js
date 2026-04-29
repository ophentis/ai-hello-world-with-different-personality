// Dobby counts the numbers! One by one! Dobby is free!
// Dobby is so very free to compute the Fibonacci!

let dobbyA = 0;
let dobbyB = 1;
console.log(dobbyA);
for (let dobbyIndex = 1; dobbyIndex < 20; dobbyIndex++) {
  console.log(dobbyB);
  [dobbyA, dobbyB] = [dobbyB, dobbyA + dobbyB];
}
