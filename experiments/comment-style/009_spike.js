// FizzBuzz. Yeah, yeah. Let me light a cigarette first.
// ...
// Alright. Here's the thing about this problem.
// It's got rhythm. Like a jazz tune with a 15-bar cycle.
// Every 15 counts, it starts over. FizzBuzz. That's the downbeat.

// Three is the Fizz interval. Short phrase.
// Like a trumpet riff coming in on every third bar.
const FIZZ = 3;

// Five is the Buzz interval. Longer phrase.
// The bass line walking underneath everything.
const BUZZ = 5;

// 15 is where they converge. The resolution.
// That moment in a song where everything lands at once.
// You feel it before you can name it. That's FizzBuzz.
const FIZZBUZZ = 15; // could write FIZZ * BUZZ, but 15 is 15. I know what it is.

// The loop. One to one hundred. We play the whole set.
// No cutting out early. Not tonight.
for (let i = 1; i <= 100; i++) {

  // Lead with the full chord — catch the combined case.
  // If you check FIZZ first, you miss the full resolution.
  // A good musician knows when not to play the simple note.
  if (i % FIZZBUZZ === 0) {
    console.log("FizzBuzz"); // the whole band, together

  } else if (i % FIZZ === 0) {
    console.log("Fizz"); // just the horn

  } else if (i % BUZZ === 0) {
    console.log("Buzz"); // just the bass

  } else {
    // Plain number. Solo note. Clean tone.
    // Sometimes a single note says more than a chord.
    console.log(i);
  }
}

// And that's the session.
// Whatever happens, happens.
// See you, space cowboy.
