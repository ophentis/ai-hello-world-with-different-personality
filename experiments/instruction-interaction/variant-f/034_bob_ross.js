// Bob Ross's Joy of Coding — FizzBuzz Tutorial
//
// Well, hello there! Welcome to The Joy of Coding.
// I'm so glad you decided to join me today.
// There are no mistakes in programming — only happy accidents.
// And today, we're going to paint a beautiful little program together.
// It's called FizzBuzz, and I think you're going to love it.

// ── WHAT WE'RE PAINTING TODAY ──────────────────────────────────────────────
// We're going to count from 1 all the way to 100 — just like a happy little meadow.
// But some of those numbers get special names, like little happy trees:
//   → If a number divides evenly by 3, we paint it "Fizz" — a soft, peaceful sound
//   → If a number divides evenly by 5, we paint it "Buzz" — bright and lively
//   → If a number divides evenly by BOTH 3 and 5? That's our special "FizzBuzz"!
//     It's like a double-trunk tree — twice the joy!
//   → Any other number? We just let it be itself. That's beautiful too.

// ── OUR PALETTE — HAPPY LITTLE CONSTANTS ──────────────────────────────────
// A painter labels their colors before they start. We do the same with our numbers.
// This way, we always know exactly what we're working with.

const FIZZ_NUMBER = 3;   // Our Fizz color — like Prussian blue, reliable and clear
const BUZZ_NUMBER = 5;   // Our Buzz color — like bright yellow, happy and bold
const FIRST_NUMBER = 1;  // Where our painting begins — the very first stroke
const LAST_NUMBER = 100; // Where our painting ends — a complete, satisfying canvas

// ── THE MAGIC BRUSH — THE MODULO OPERATOR ─────────────────────────────────
// The % symbol is called "modulo" — it tells you the remainder after division.
// It's like asking: when you divide this number by that number, is there anything left over?
//   15 % 3 = 0  → nothing left over! Divides perfectly. Like a clean, smooth stroke.
//   16 % 3 = 1  → one left over. Doesn't divide evenly. That's okay! It's just the number.
//   10 % 5 = 0  → nothing left over! Another perfect stroke.
// When remainder = 0, the number divides cleanly. That's how we decide what to paint.

// ── THE HAPPY LITTLE FUNCTION — OUR DECISION MAKER ───────────────────────
// Let's create a little helper — a function that decides what to paint for each number.
// Functions are like having a friend who's really good at one thing.
// You hand them a number, they hand you back the right label. Isn't that lovely?

function whatToPaint(number) {
  // First, we check for FizzBuzz — divisible by BOTH 3 and 5 (that means by 15).
  // We MUST check this first! It's the most specific case — the most special tree.
  // If we checked Fizz first, the number 15 would only get "Fizz" — and we'd miss its full beauty.
  if (number % (FIZZ_NUMBER * BUZZ_NUMBER) === 0) {
    return 'FizzBuzz'; // The most joyful output! Double the happiness!
  }

  // Next, we check if it's a Fizz — divisible by 3 only
  if (number % FIZZ_NUMBER === 0) {
    return 'Fizz'; // Lovely. Quiet. Peaceful.
  }

  // Then, we check if it's a Buzz — divisible by 5 only
  if (number % BUZZ_NUMBER === 0) {
    return 'Buzz'; // Bright and cheerful!
  }

  // If none of the above — just the number itself. Every number has its own beauty.
  return String(number); // Just as it is. Perfect as it is.
}

// ── THE LOOP — OUR HAPPY LITTLE JOURNEY ───────────────────────────────────
// A for loop is how we travel through our painting, number by number.
// We start at 1 and walk all the way to 100 — one happy step at a time.
//
//   let currentNumber = FIRST_NUMBER  → pick up the brush at number 1
//   currentNumber <= LAST_NUMBER      → keep painting while we haven't reached 100 yet
//   currentNumber++                   → take one step forward (++ adds 1)

for (let currentNumber = FIRST_NUMBER; currentNumber <= LAST_NUMBER; currentNumber++) {
  // Ask our little helper what to paint, then put it on the canvas
  const brushStroke = whatToPaint(currentNumber);
  console.log(brushStroke); // There it goes — right on the canvas!
}

// ── THE FINISHED PAINTING ─────────────────────────────────────────────────
// And there you have it — a complete, beautiful FizzBuzz.
// 100 numbers, each one evaluated, each one expressed in its own unique way.
// You painted that. You should be proud.
//
// Remember: in coding, just like in painting, there are no mistakes — only chances to learn.
// Every bug you find is a happy little accident showing you the way.
// I believe in you. Come back anytime.
// Happy coding, my friend.
