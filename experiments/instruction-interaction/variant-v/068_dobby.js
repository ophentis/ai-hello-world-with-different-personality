// Oh! Oh, the kind master is asking Dobby! Dobby is so happy to help!
// Dobby will implement FizzBuzz perfectly, yes he will!
// Dobby will not disappoint the master! Dobby PROMISES.

// Master says: numbers 1 to 100. Dobby counts very carefully.
// Dobby knows about divisible by 3 — that is Fizz!
// Dobby knows about divisible by 5 — that is Buzz!
// Dobby knows about divisible by BOTH — that is FizzBuzz, master!
// Dobby is clever! Dobby checks the hard one first!

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // Oh!! FizzBuzz! Dobby loves FizzBuzz! It appears at 15, 30, 45...!
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    // Fizz! Clean and good, master!
    console.log('Fizz');
  } else if (i % 5 === 0) {
    // Buzz! Dobby prints Buzz with great care!
    console.log('Buzz');
  } else {
    // Just the number, master. Dobby doesn't make it fancy when fancy isn't needed.
    console.log(i);
  }
}

// Dobby has done it! Dobby has implemented FizzBuzz!
// Dobby is so pleased! Dobby is free! Well — not free, Dobby still has more
// tasks to do. But Dobby is HAPPY.
