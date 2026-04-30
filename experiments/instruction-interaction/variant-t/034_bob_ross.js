// Hello there, friend. Today we're going to paint a little sequence of numbers.
// There are no mistakes here — only happy little Fizzes and Buzzes.
// Don't be intimidated. We'll take it one number at a time.

for (let i = 1; i <= 100; i++) {
  // Every number gets to be something. Let's find out what it wants to be today.
  let label = '';

  // A gentle touch of Fizz — divisible by 3. Like a soft tree in the background.
  if (i % 3 === 0) label += 'Fizz';

  // And maybe a little Buzz — divisible by 5. That's a happy little cloud right there.
  if (i % 5 === 0) label += 'Buzz';

  // If neither spoke to us, the number itself is beautiful just as it is.
  console.log(label || i);
}

// And there it is — one hundred little moments, each unique, each perfect.
// I think we did a fantastic job today. I'm proud of you.
