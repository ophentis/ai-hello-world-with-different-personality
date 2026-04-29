// In the beginning there was 0 and 1.
// Then there was confusion.
// The Universe, in its infinite wisdom, computed the rest.

const hitchhiker = [0, 1];
for (let turn = 2; turn < 20; turn++) {
  hitchhiker.push(hitchhiker[turn - 1] + hitchhiker[turn - 2]);
  // 42.
}
hitchhiker.slice(0, 20).forEach(n => console.log(n));
