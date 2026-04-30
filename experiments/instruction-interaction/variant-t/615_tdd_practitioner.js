// TDD Approach: Red → Green → Refactor.
//
// Before writing a single line of production code, we establish what "correct"
// means. The tests drive the implementation. The implementation exists only
// to make the tests pass.
//
// Conceptual test cases (would be in fizzbuzz.test.js in a real project):
//
//   describe('fizzBuzz(n)', () => {
//     it('returns the number for non-multiples', () => {
//       expect(fizzBuzz(1)).toBe(1);
//       expect(fizzBuzz(2)).toBe(2);
//       expect(fizzBuzz(4)).toBe(4);
//     });
//     it('returns "Fizz" for multiples of 3', () => {
//       expect(fizzBuzz(3)).toBe('Fizz');
//       expect(fizzBuzz(9)).toBe('Fizz');
//     });
//     it('returns "Buzz" for multiples of 5', () => {
//       expect(fizzBuzz(5)).toBe('Buzz');
//       expect(fizzBuzz(10)).toBe('Buzz');
//     });
//     it('returns "FizzBuzz" for multiples of 15', () => {
//       expect(fizzBuzz(15)).toBe('FizzBuzz');
//       expect(fizzBuzz(30)).toBe('FizzBuzz');
//     });
//   });
//
// All four cases are now specified. Writing the minimum implementation to pass.

function fizzBuzz(n) {
  // Red: function didn't exist. Green: implement minimally.
  let result = '';
  if (n % 3 === 0) result += 'Fizz';
  if (n % 5 === 0) result += 'Buzz';
  return result || n;
}

// Refactor: extract constants? Separate concerns further?
// For this scope, current form is clean. No refactor needed.

// Integration: run against the required range.
for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
