// Embedded Developer: Bit manipulation, memory constrained

function fizzBuzzWithBits() {
  for (let i = 1; i <= 100; i++) {
    // Bitwise mod operations (quirky but memory conscious)
    const div3 = (i % 3) === 0;
    const div5 = (i % 5) === 0;
    let flags = (div3 ? 1 : 0) | ((div5 ? 1 : 0) << 1);

    switch (flags) {
      case 3: // both bits set
        console.log('FizzBuzz');
        break;
      case 1: // only div3
        console.log('Fizz');
        break;
      case 2: // only div5
        console.log('Buzz');
        break;
      case 0: // neither
        console.log(i);
        break;
    }
  }
}

fizzBuzzWithBits();
