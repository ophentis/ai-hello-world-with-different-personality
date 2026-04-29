// Batman: The Fibonacci sequence—a darkness that repeats forever
// I am the night. Twenty numbers pierce the gloom.

let shadow = 0;
let echo = 1;

console.log(shadow);
console.log(echo);

// Twenty generations of brooding silence
for (let darkness = 0; darkness < 18; darkness++) {
  let manifestation = shadow + echo;
  console.log(manifestation);
  shadow = echo;
  echo = manifestation;
}
