// COMMANDER SHEPARD — RECRUIT CODING BRIEFING
// N7 Special Operations | Programming Fundamentals | Module 1: FizzBuzz
//
// Listen up, recruits. I'm only going to explain this once.
// I've fought Reapers. I've dealt with worse code than this.
// FizzBuzz is your first mission. Simple objective. High consequences if you fail.
// The galaxy is watching. Let's get it right.

// ── MISSION BRIEFING ──────────────────────────────────────────────────────
// Primary objective: Count from 1 to 100. Print each number on its own line.
// Secondary conditions — apply these in order of priority:
//   1. Number divisible by both 3 AND 5 → print "FizzBuzz" (highest priority)
//   2. Number divisible by 3 only       → print "Fizz"
//   3. Number divisible by 5 only       → print "Buzz"
//   4. No match                         → print the number
//
// I've seen soldiers get the ORDER wrong. Don't. FizzBuzz before Fizz. Always.

// ── WEAPONS SYSTEMS — THE MODULO OPERATOR ────────────────────────────────
// The % operator is your primary tool. It returns the REMAINDER after division.
//   15 % 3 = 0  → clean division, no remainder — condition met
//   15 % 5 = 0  → clean division, no remainder — condition met
//   7  % 3 = 1  → remainder of 1 — condition NOT met, move on
// Zero remainder means the number is divisible. That's how you identify your targets.

// ── SQUAD ASSIGNMENTS — NAMED CONSTANTS ──────────────────────────────────
// Every squad member has a designation. "That person" is not a designation.
const FIZZ_THRESHOLD = 3;   // Divisible by this → "Fizz"
const BUZZ_THRESHOLD = 5;   // Divisible by this → "Buzz"
const COMBINED_THRESHOLD = FIZZ_THRESHOLD * BUZZ_THRESHOLD; // 15 → "FizzBuzz"
const MISSION_START = 1;    // First number — the mission begins here
const MISSION_END = 100;    // Last number — the mission ends here

// ── EXECUTION LOOP ────────────────────────────────────────────────────────
// A for loop advances through the mission one step at a time.
// Think of it like sweeping a map: start at one end, evaluate each position, move forward.
//   let currentTarget = MISSION_START  → start at 1
//   currentTarget <= MISSION_END       → continue while in range (≤ 100)
//   currentTarget++                    → advance to the next position (add 1)

for (let currentTarget = MISSION_START; currentTarget <= MISSION_END; currentTarget++) {

  // PRIORITY 1: FizzBuzz — divisible by both 3 and 5 (divisible by 15)
  // Check this FIRST. 15 is divisible by both. If you check Fizz first, you'll
  // misidentify 15 as "Fizz" — a mission-critical error. Not on my squad.
  if (currentTarget % COMBINED_THRESHOLD === 0) {
    console.log('FizzBuzz');

  // PRIORITY 2: Fizz — divisible by 3
  } else if (currentTarget % FIZZ_THRESHOLD === 0) {
    console.log('Fizz');

  // PRIORITY 3: Buzz — divisible by 5
  } else if (currentTarget % BUZZ_THRESHOLD === 0) {
    console.log('Buzz');

  // NO MATCH: Report the number
  } else {
    console.log(currentTarget);
  }
}

// ── DEBRIEF ───────────────────────────────────────────────────────────────
// Mission complete. 100 numbers evaluated. All objectives met.
// What you learned today:
//   - for loops: advancing through a range systematically
//   - The modulo operator %: detecting divisibility
//   - Conditional logic: if / else if — checking conditions in priority order
//   - Named constants: clear, readable code labels
//
// I'm proud of you, recruits. The Normandy is a better ship with programmers like you.
// Now suit up. There are more missions ahead.
// I should go.
