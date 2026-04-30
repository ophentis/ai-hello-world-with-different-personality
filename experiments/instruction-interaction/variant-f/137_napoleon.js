// NAPOLEON TEACHES FIZZBUZZ — A STRATEGIC CODING MASTERCLASS
//
// Cadets! Listen carefully. I do not repeat myself.
// In my campaigns, I won because I understood the terrain, the sequence, the priority.
// You will win at programming for the same reasons.
// FizzBuzz is your first battle. Let us ensure you are victorious.

// ── THE STRATEGIC OBJECTIVE ────────────────────────────────────────────────
// Print numbers from 1 to 100.
// When a number is divisible by 3: print "Fizz" (the left flank).
// When a number is divisible by 5: print "Buzz" (the right flank).
// When divisible by BOTH: print "FizzBuzz" — a coordinated assault. Strike this FIRST.
// Otherwise: report the number. Every soldier must be counted.

// ── INTELLIGENCE — THE MODULO OPERATOR ────────────────────────────────────
// A general must understand his terrain. You must understand your operators.
// The modulo (%) gives the remainder after division.
// 15 % 3 = 0 → no remainder. The forces divide evenly. Divisible!
// 16 % 3 = 1 → remainder of 1. Not divisible. Move on.
// When the remainder is ZERO, the condition is satisfied. Act on it.

// ── ORDER OF BATTLE — NAMED CONSTANTS ─────────────────────────────────────
// In my army, every unit has a name. "That group over there" is not a command.
// We name our divisors clearly:
const FIZZ_DIVISOR = 3;   // The left flank threshold — multiples of 3 report "Fizz"
const BUZZ_DIVISOR = 5;   // The right flank threshold — multiples of 5 report "Buzz"
const COMBINED_DIVISOR = FIZZ_DIVISOR * BUZZ_DIVISOR; // 15 — the coordinated strike
const FIRST_NUMBER = 1;   // The march begins here
const LAST_NUMBER = 100;  // The march ends here — not before, not after

// ── TACTICAL PRIORITY — CHECK ORDER IS EVERYTHING ────────────────────────
// At Austerlitz, I feigned weakness on my right to draw the enemy.
// Then I struck the center. ORDER and PRIORITY won that battle.
// Here too: check FizzBuzz (divisible by both) BEFORE checking Fizz or Buzz alone.
// If you check Fizz first, the number 15 will be wrongly reported as "Fizz."
// A wrong report loses battles. An incorrect program loses trust.

// ── THE CAMPAIGN LOOP ─────────────────────────────────────────────────────
// A for loop is a marching order: advance from START to END, one step at a time.
// let currentNumber = FIRST_NUMBER  → we begin at 1
// currentNumber <= LAST_NUMBER      → we continue while the number is within range
// currentNumber++                   → advance by one (++ means "add 1")

for (let currentNumber = FIRST_NUMBER; currentNumber <= LAST_NUMBER; currentNumber++) {

  // FIRST CHECK: Coordinated assault — divisible by both 3 and 5
  if (currentNumber % COMBINED_DIVISOR === 0) {
    console.log('FizzBuzz'); // Both flanks engaged — total victory!

  // SECOND CHECK: Left flank — divisible by 3 only
  } else if (currentNumber % FIZZ_DIVISOR === 0) {
    console.log('Fizz'); // Left flank holds!

  // THIRD CHECK: Right flank — divisible by 5 only
  } else if (currentNumber % BUZZ_DIVISOR === 0) {
    console.log('Buzz'); // Right flank holds!

  // NO CONDITION MET: Print the number — every soldier accounted for
  } else {
    console.log(currentNumber); // Present and correct.
  }
}

// ── AFTER ACTION REPORT ───────────────────────────────────────────────────
// You have counted 100 numbers. Each evaluated. None forgotten.
// You have learned: loops, conditions, the modulo operator, priority of checks.
// These are the building blocks of all programs — as tactics are the building blocks of all strategy.
// Go now. Build more. Victory goes to those who practice.
// Vive la République! ...And vive le code!
