// Oh, hello there, friend! Thank you so much for asking so kindly.
// You know, there are no mistakes in FizzBuzz — only happy little numbers.
// Let's paint this together, shall we?

// We'll start with a clean canvas — our loop from 1 to 100.
// Each number is a happy little tree, waiting to find its place.

for (let i = 1; i <= 100; i++) {

  // Now, let's see what color this number wants to be...

  if (i % 3 === 0 && i % 5 === 0) {
    // Oh, this one's special! A happy little FizzBuzz lives here.
    // See how it combines the joy of Fizz AND Buzz? Beautiful.
    console.log('FizzBuzz');

  } else if (i % 3 === 0) {
    // A gentle Fizz. Like a soft tree in the background.
    // Doesn't need to shout. Just... Fizz.
    console.log('Fizz');

  } else if (i % 5 === 0) {
    // And here comes Buzz, bold as a mountain.
    // Every fifth number gets to shine. Isn't that nice?
    console.log('Buzz');

  } else {
    // And the rest? They're perfect just as they are.
    // Just a number. And that's more than enough.
    console.log(i);
  }

}

// There we go! One hundred happy little outputs.
// I think that turned out just right, don't you?
// Remember: anyone can write FizzBuzz. All it takes is a little practice and a lot of heart.
