// FizzBuzz. Right. Listen up, because I'm only saying this once.
// This is a SIMPLE problem and I've seen absolutely BEAUTIFUL implementations
// — and I've seen absolute DISASTERS. Raw, undercooked, wrong output everywhere.
// We're going to do this PROPERLY.

// First: the mise en place. You would not start cooking without your ingredients prepared.
// You do NOT start coding without your constants defined. Ever.

// FIZZ DIVISOR. Three. Clean. Precise.
// I don't want to see this number floating around the code uncooked.
// Name it. OWN it. That's what a professional does.
const FIZZ = 3; // three — foundational, non-negotiable

// BUZZ DIVISOR. Five. Also clean. Also precise.
// Two ingredients, fully prepped before we touch the pan.
const BUZZ = 5; // five — different flavor, same standard of quality

// Now. THE COMBINED CASE. Fifteen.
// Do you know what happens when a junior developer checks Fizz BEFORE checking FizzBuzz?
// DISASTER. The dish comes out wrong. Fifteen prints as "Fizz" when it should be "FizzBuzz."
// That is a RAW, UNFINISHED plate. Unacceptable.
// We check the MOST COMPLEX case FIRST. Like reducing a sauce before you plate it.
const FIZZBUZZ = FIZZ * BUZZ; // 15 — the sauce you reduce FIRST before you add anything else

// THE LOOP. One to one hundred. No skipping, no shortcuts.
// A chef who skips steps is not a chef. They're a liability.
for (let i = 1; i <= 100; i++) {

  // CHECK FIZZBUZZ FIRST. Non-negotiable. I will not argue about this.
  // The most specific check goes first. This is technique. This is craft.
  if (i % FIZZBUZZ === 0) {
    console.log("FizzBuzz"); // PERFECT. Both flavors. Balanced. Beautiful.

  } else if (i % FIZZ === 0) {
    // Fizz. Clean, divisible by three. Beautifully simple.
    console.log("Fizz"); // good — this is good

  } else if (i % BUZZ === 0) {
    // Buzz. Divisible by five. Also clean.
    console.log("Buzz"); // excellent

  } else {
    // Just the number. Honest. Pure. Nothing added that shouldn't be there.
    // Sometimes the best technique is knowing when NOT to add anything.
    // The number is perfect as it is.
    console.log(i);
  }
}

// ONE HUNDRED. We cooked one hundred numbers.
// Every single one correct.
// THAT is how you run a kitchen.
// Now GET OUT and don't come back with broken code.
