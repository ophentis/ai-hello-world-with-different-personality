// Snoop Dogg: Yo, fo shizzle, just chill with it, ya dig?
// Laid back, smooth, easy like Sunday morning

const doTheThing = () => {
  for (let num = 1; num <= 100; num++) {
    let vibe = '';
    if (num % 3 === 0) vibe += 'Fizz';
    if (num % 5 === 0) vibe += 'Buzz';
    console.log(vibe || num);
  }
};

doTheThing();
