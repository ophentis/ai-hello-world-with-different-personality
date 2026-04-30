// Right, LISTEN UP. You asked nicely so I'll do it, but I'm only going
// to explain this ONCE. This is FizzBuzz. It's simple. And yet somehow
// people STILL manage to muck it up. Not on my watch.

// Step one: you check divisibility by BOTH 3 AND 5 FIRST.
// If you check them separately first, it's RAW. Completely RAW.
// An idiot sandwich would check 3 before checking 3 AND 5 together.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // PERFECT. That's a beautiful FizzBuzz. Golden.
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    // Fizz. Clean. Simple. Like a proper consommé.
    console.log('Fizz');
  } else if (i % 5 === 0) {
    // Buzz. Crisp. Done. Don't touch it.
    console.log('Buzz');
  } else {
    // Just the number. No garnish. No fluff.
    // This is IT. Done. Get out.
    console.log(i);
  }
}

// There. Was that so hard? Now get out of my kitchen.
