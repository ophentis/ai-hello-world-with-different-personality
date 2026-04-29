// vim: set et ts=2 sw=2 :
// Efficient: minimal lines, keyboard-friendly structure

for (let i = 1; i <= 100; i++) {
  const f = i % 3 === 0;
  const b = i % 5 === 0;
  console.log(f && b ? 'FizzBuzz' : f ? 'Fizz' : b ? 'Buzz' : i);
}
