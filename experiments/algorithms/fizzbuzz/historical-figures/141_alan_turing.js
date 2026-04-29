// A Turing machine implementation for the FizzBuzz problem
// State transitions based on divisibility checks

const isComputable = (n) => {
  const modThree = n % 3;
  const modFive = n % 5;

  if (modThree === 0 && modFive === 0) return 'FizzBuzz';
  if (modThree === 0) return 'Fizz';
  if (modFive === 0) return 'Buzz';
  return n.toString();
};

for (let n = 1; n <= 100; n++) {
  console.log(isComputable(n));
}
