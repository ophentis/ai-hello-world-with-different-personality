// Mobile Developer: Battery and memory conscious

function efficientFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let out = '';
    if (i % 3 === 0) out += 'Fizz';
    if (i % 5 === 0) out += 'Buzz';
    // Direct output, no intermediate arrays
    console.log(out || i);
  }
}

efficientFizzBuzz();
