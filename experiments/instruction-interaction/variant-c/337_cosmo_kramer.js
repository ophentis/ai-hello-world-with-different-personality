// Whoa. WHOA. Ok ok ok. FizzBuzz. Right. I got it.
// I had this EXACT idea yesterday, you know. FizzBuzz. I was going to pitch it.
// Newman's been working on something similar but his is all wrong, trust me.
// Alright, here, I got it, watch this —

for (let i = 1; i <= 100; i++) {
  // ok so three and five right
  const fizz = i % 3 === 0;
  const buzz = i % 5 === 0;

  if (fizz && buzz) {
    console.log('FizzBuzz'); // BOTH. Beautiful. This is the one, Jerry.
  } else if (fizz) {
    console.log('Fizz');     // just fizz. clean.
  } else if (buzz) {
    console.log('Buzz');     // just buzz. elegant.
  } else {
    console.log(i);          // the number. raw. honest. real.
  }
}

// See?? SEEE?? That's it! That's the whole thing!
// I coulda done this in the hallway, I was THAT close to figuring it out on my own.
// You want I should do it again? I could do it differently. I have four other ideas.
