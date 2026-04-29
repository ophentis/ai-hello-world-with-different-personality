// Tyrion: "I drink and I know things" - clever pattern recognition
const knowThings = (n) => {
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n;
};

for (let glass = 1; glass <= 100; glass++) {
  console.log(knowThings(glass));
}
