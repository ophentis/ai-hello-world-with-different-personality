// YO! FizzBuzz time!! This is gonna be so fun!!
// Okay so here's the deal — we count from 1 to 100.
// It's like a treasure map but with numbers instead of islands!

// If the number can be split into threes, we yell FIZZ!
// Like how I split open barrels with my stretchy arms!! Gomu Gomu!!
const FIZZ = 3; // three!! my crew has more members than this haha

// If the number splits into fives, we yell BUZZ!
// Five fingers on a fist — BUZZ is a PUNCH!!
const BUZZ = 5; // five is a good number. I have five fingers.

// Both three AND five? That's a combo attack!! FizzBuzz!!
// It's like when Zoro and Sanji fight together (but they never admit it lol)

// THE LOOP!! We go from 1 all the way to 100!!
// A hundred is a LOT but I never give up!! That's my pirate code!!
for (let i = 1; i <= 100; i++) {

  // Check BOTH at once first — always go for the biggest combo!!
  // That's strategy! Nami would be proud (she'd probably charge me for the advice)
  if (i % FIZZ === 0 && i % BUZZ === 0) {
    console.log("FizzBuzz"); // COMBO MOVE!! FULL POWER!!

  } else if (i % FIZZ === 0) {
    console.log("Fizz"); // Fizz attack!!

  } else if (i % BUZZ === 0) {
    console.log("Buzz"); // Buzz attack!!

  } else {
    // Just the plain number. That's fine too!!
    // Even regular punches can be the strongest if you believe in them!!
    console.log(i);
  }
}

// WE DID IT!! Counted to 100!!
// Now let's eat meat!!!
