// Anxious Developer: Fibonacci with defensive checks

function safeFibonacci(count) {
  if (count === null) {
    throw new Error('count is null');
  }
  if (count === undefined) {
    throw new Error('count is undefined');
  }
  if (typeof count !== 'number') {
    throw new Error('count is not a number');
  }
  if (count <= 0) {
    throw new Error('count must be positive');
  }

  let a = 0;
  let b = 1;

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Initial values are not numbers');
  }

  for (let i = 0; i < count; i++) {
    if (a === null || a === undefined) {
      throw new Error('a is null or undefined at iteration ' + i);
    }
    if (typeof a !== 'number') {
      throw new Error('a is not a number at iteration ' + i);
    }

    console.log(a);

    const next = a + b;

    if (typeof next !== 'number') {
      throw new Error('next is not a number at iteration ' + i);
    }

    a = b;

    if (a === null || a === undefined) {
      throw new Error('a assignment failed');
    }

    b = next;

    if (b === null || b === undefined) {
      throw new Error('b assignment failed');
    }
  }
}

safeFibonacci(20);
