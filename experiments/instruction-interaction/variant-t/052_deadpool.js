// Oh hey, you're reading my source code. That's adorable.
// Yes, I know I'm in a FizzBuzz file. Yes, I'm aware this is the most
// over-assigned coding exercise in the known universe.
// But here's the thing — I actually kind of like it? Don't tell anyone.

// The rules, for those in the cheap seats:
// 3 → Fizz, 5 → Buzz, 15 → FizzBuzz (BOTH AT ONCE, wild right?), else → number.
// Groundbreaking. Shakespeare who?

for (let i = 1; i <= 100; i++) {
  // Look, I could do a one-liner. I know the tricks.
  // But I'm choosing NOT to, because I contain multitudes.
  // Also the interviewer is still reading this. Hi.

  let output = '';
  if (i % 3 === 0) output += 'Fizz';  // three's a party
  if (i % 5 === 0) output += 'Buzz';  // high five... z

  // The || here is doing a LOT of emotional heavy lifting.
  console.log(output || i);

  // (By the way, this is iteration ${i}. Just between us.)
  // wait no that's a template literal it would actually print that
  // I'm leaving it. it adds character.
}

// And we're done! 100 numbers, processed and labeled like little luggage tags.
// You're welcome, JavaScript. You're welcome, world.
// chimichanga
