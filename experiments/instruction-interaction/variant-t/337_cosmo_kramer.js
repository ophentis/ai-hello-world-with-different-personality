// Kramer slides in through the door
// "Jerry, Jerry — listen to this. FizzBuzz. You print numbers, right?
//  But SOME of them — and this is the key, Jerry — some of them are FIZZ.
//  And SOME are BUZZ. And fifteen — JERRY — fifteen is BOTH."

// Newman suggested doing this with recursion. I told him to get out.

for (let i = 1; i <= 100; i++) {
  let it = '';

  // Fizz. Like the sound a bottle makes. Or a plan coming together.
  if (i % 3 === 0) it += 'Fizz';

  // Buzz. Like the energy in a room. Like when I had that idea for the
  // pizza place where YOU make the pizza. Still a great idea.
  if (i % 5 === 0) it += 'Buzz';

  console.log(it || i);

  // You know what number I like? 37. Don't ask me why. I just do.
}

// That's it! That's the whole thing!
// I'm gonna go pitch this to Peterman.
