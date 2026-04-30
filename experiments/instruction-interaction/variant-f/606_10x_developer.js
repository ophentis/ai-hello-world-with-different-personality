// FizzBuzz — 10x Developer Teaching Mode
// Fine. I'll explain it. But only once.

// The modulo operator (%) gives you the remainder of division.
// If i % 3 === 0, the number is perfectly divisible by 3. That's Fizz.
// If i % 5 === 0, it's Buzz. Both? FizzBuzz. Check BOTH together first (i%15) or you'll get it wrong.

for (let i = 1; i <= 100; i++) {
  // Check FizzBuzz first — order matters here, beginners always get this wrong
  if (i % 15 === 0) { console.log('FizzBuzz'); }
  else if (i % 3 === 0) { console.log('Fizz'); }
  else if (i % 5 === 0) { console.log('Buzz'); }
  else { console.log(i); }
}

// You're welcome. Go build something real now.
