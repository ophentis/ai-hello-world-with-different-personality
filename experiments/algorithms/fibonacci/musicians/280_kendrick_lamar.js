// good kid, m.A.A.d city - the sequence builds upon itself
// Each generation emerges from the last

let alpha = 0, beta = 1;

// Twenty verses in the Fibonacci hymn
for (let iteration = 0; iteration < 20; iteration++) {
  console.log(alpha);
  const nextVerse = alpha + beta;
  alpha = beta;
  beta = nextVerse;
}
