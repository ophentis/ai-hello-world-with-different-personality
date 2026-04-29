// Fibonacci - defensive implementation preserving backwards compatibility
// Supports older Node versions and legacy calling conventions

function fibonacci(count) {
  var prev, curr, next, i;

  prev = 0;
  curr = 1;

  console.log(String(prev));

  for (i = 1; i < count; i = i + 1) {
    console.log(String(curr));
    next = prev + curr;
    prev = curr;
    curr = next;
  }
}

// Defensive execution with type checking
if (typeof fibonacci === 'function') {
  fibonacci(20);
}
