// REFACTORED: Deprecated old inefficient loop approach
// MIGRATION: From nested ternary to clear conditional blocks
// CLEANUP: Removed legacy commented-out code

function fizzbuzz() {
  // TODO(debt): Consider memoizing divisibility checks if this becomes hot path
  for (let i = 1; i <= 100; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;

    // Clear, maintainable decision tree (replaces old IIFE wrapper)
    if (fizz && buzz) {
      console.log('FizzBuzz');
    } else if (fizz) {
      console.log('Fizz');
    } else if (buzz) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// NOTE: Migrated from v1.0 generator function pattern
fizzbuzz();
