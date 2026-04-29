// Kernel developer: low-level bit manipulation, memory-aware
function fizzbuzz_kernel(limit) {
  for (let i = 1; i <= limit; i++) {
    let flags = 0;

    // Bit 0: divisible by 3
    if ((i % 3) === 0) flags |= 1;
    // Bit 1: divisible by 5
    if ((i % 5) === 0) flags |= 2;

    switch (flags) {
      case 3: // both bits set (15)
        console.log('FizzBuzz');
        break;
      case 1: // only bit 0
        console.log('Fizz');
        break;
      case 2: // only bit 1
        console.log('Buzz');
        break;
      default:
        console.log(i);
    }
  }
}

fizzbuzz_kernel(100);
