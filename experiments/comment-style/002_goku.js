// ALRIGHT! FizzBuzz! Let's do this!!
// I heard this is a classic problem — like a training exercise!
// Even on Namek we had to warm up before the real fight!

// So here's what I understand: we go from 1 to 100.
// That's our power level range right now!
// Along the way, some numbers transform — just like me going Super Saiyan!

// When the number is divisible by 3, it powers up into "Fizz"!
// Divisible means it divides with ZERO left over — no remainder!
// Krillin explained remainders to me once. Thanks Krillin!
const FIZZ_POWER = 3;

// When divisible by 5, it powers up into "Buzz"!
// Five is a strong number. Five fingers. Five senses. Strong!
const BUZZ_POWER = 5;

// THE GREAT TRAINING LOOP! 1 to 100! FULL POWER!
// I've fought battles that lasted dozens of episodes — 100 iterations is nothing!
for (let i = 1; i <= 100; i++) {

  // The ULTRA TRANSFORMATION — divisible by BOTH 3 AND 5!
  // That means divisible by 15! Maximum power!! FizzBuzz!!
  // This is like achieving Super Saiyan 3 — check this first!!
  if (i % 15 === 0) {
    console.log("FizzBuzz"); // MAXIMUM POWER!! KAAAMEEE HAAAMEEE HAAA!!

  } else if (i % FIZZ_POWER === 0) {
    // Regular Super Saiyan level — just Fizz!
    console.log("Fizz"); // FIZZ POWER ACTIVATED!

  } else if (i % BUZZ_POWER === 0) {
    // Different power-up — just Buzz!
    console.log("Buzz"); // BUZZ POWER ACTIVATED!

  } else {
    // Regular number — still strong! Every fighter starts here!
    // Even I was just a baby Saiyan once!
    console.log(i);
  }
}

// WE REACHED 100!! TRAINING COMPLETE!!
// I can feel my power level rising just from finishing this!
// Chi-Chi is gonna be proud!! ...She'll probably just tell me to study more.
