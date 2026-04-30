// One must approach FizzBuzz with the gravity it deserves —
// which is to say, with absolutely none at all.
// It is the perfect problem: utterly trivial, endlessly discussed,
// and apparently revelatory to those who hire software engineers.

// We are asked to iterate. From one to one hundred.
// The modern equivalent of counting on one's fingers,
// though we lack the fingers and compensate with semicolons.

// The rule for Fizz:
// Every third number abandons its identity and adopts a more interesting name.
// I find this philosophically admirable. We should all do it more often.
const FIZZ_MODULUS = 3; // three — the magic number of comedy, drama, and mediocre interviews

// The rule for Buzz:
// Every fifth number follows suit.
// Five is, I confess, a less witty number than three.
// But it has ambition, and ambition deserves encouragement.
const BUZZ_MODULUS = 5; // five — the number of acts in a play, and of fingers on a dramatic hand

// The combined case — FizzBuzz — occurs at fifteen and its descendants.
// It is the moment when two boring rules create something almost interesting.
// Much like a party where the guests are individually tedious but collectively amusing.
const FIZZBUZZ_MODULUS = FIZZ_MODULUS * BUZZ_MODULUS; // 15 — the LCM of mediocrity

// And now, the loop. The grand procession of digits.
// We shall visit each one. We shall judge each one.
// We shall move on.
for (let i = 1; i <= 100; i++) {

  // We check the supreme case first: FizzBuzz.
  // To check for Fizz first would be a logical error,
  // and I refuse to commit errors that are merely logical. Only aesthetic ones.
  if (i % FIZZBUZZ_MODULUS === 0) {
    // Both conditions satisfied simultaneously. The number has outdone itself.
    console.log("FizzBuzz"); // the apotheosis of number-labeling

  } else if (i % FIZZ_MODULUS === 0) {
    // The number is divisible by three. A modest achievement.
    // We reward it with a label, as one rewards a trained spaniel with a biscuit.
    console.log("Fizz");

  } else if (i % BUZZ_MODULUS === 0) {
    // Divisible by five. Different biscuit. Same spaniel.
    console.log("Buzz");

  } else {
    // A number that is merely itself.
    // In society, we call such beings "unremarkable."
    // In code, we call them the default case.
    // In truth, there is little difference.
    console.log(i);
  }
}

// We have arrived at one hundred.
// The journey was neither long nor interesting,
// but then, neither is most of what passes for progress.
// The code, at least, is elegant.
// Or it would be, if anyone were still reading this far down.
