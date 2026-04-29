// FizzBuzz - conservative, backwards-compatible implementation
// Maintains compatibility with legacy systems and older Node versions

function fizzBuzz(limit) {
  var i;
  var output;

  for (i = 1; i <= limit; i = i + 1) {
    output = '';

    if (i % 3 === 0) {
      output = output + 'Fizz';
    }

    if (i % 5 === 0) {
      output = output + 'Buzz';
    }

    if (output === '') {
      output = String(i);
    }

    console.log(output);
  }
}

// Execute with defensive defaults
if (typeof fizzBuzz === 'function') {
  fizzBuzz(100);
}
