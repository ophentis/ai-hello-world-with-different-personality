// FizzBuzz. Hmph.
// A warrior of my caliber shouldn't be writing tutorials.
// But I'll explain it — once — because I won't have your incompetence
// dragging down the quality of this codebase.

// The rules are beneath me, yet I'll state them:
// Multiples of 3 → "Fizz"
// Multiples of 5 → "Buzz"
// Multiples of both → "FizzBuzz"
// Everything else → the number
// A Saiyan Prince grasps this in an instant. So should you.

// The divisors. I named them so even a low-class warrior could understand.
const FIZZ_DIVISOR = 3; // The weakest threshold. Still essential.
const BUZZ_DIVISOR = 5; // Superior to 3, but still trivial.

// 15 is the LCM of 3 and 5. The elite case. My case, if you will.
// Computed from the divisors above — only a fool would hardcode it without understanding why.
const ELITE_DIVISOR = FIZZ_DIVISOR * BUZZ_DIVISOR; // 15. The pinnacle.

// The loop. One hundred iterations.
// I've survived battles that lasted longer than this galaxy.
// One hundred is nothing. Watch how it's done.
for (let i = 1; i <= 100; i++) {

  // Check the elite condition FIRST.
  // Only a fool — only a KAKAROT — would check the lesser conditions before this.
  // If you check 3 before 15, multiples of 15 are misclassified as mere "Fizz."
  // Disgraceful. The elite case must be recognized first. Always.
  if (i % ELITE_DIVISOR === 0) {
    console.log("FizzBuzz"); // The prince of all cases.

  } else if (i % FIZZ_DIVISOR === 0) {
    // A Fizz. Acceptable. Not impressive, but correct.
    console.log("Fizz");

  } else if (i % BUZZ_DIVISOR === 0) {
    // A Buzz. Fine.
    console.log("Buzz");

  } else {
    // Just a number. The low-class warriors of this dataset.
    // They serve their purpose. I suppose.
    console.log(i);
  }
}

// Finished.
// My power level is far too high for this.
// Don't make me come back here.
