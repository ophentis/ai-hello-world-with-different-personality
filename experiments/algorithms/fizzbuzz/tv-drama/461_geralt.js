// Geralt - Gruff Monster Hunter
// Hmm. Terse. Minimal approach.

const hunterLogic = () => {
  for (let n = 1; n <= 100; n++) {
    let r = "";
    if (n % 3 === 0) r += "Fizz";
    if (n % 5 === 0) r += "Buzz";
    console.log(r || n);
  }
};

hunterLogic();
