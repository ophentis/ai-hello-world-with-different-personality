// Jeff Bezos: Day 1 thinking. Start simple, scale for the future.
class FibonacciSequenceGenerator {
  generate(count) {
    let a = 0, b = 1;
    console.log(a);

    for (let i = 1; i < count; i++) {
      console.log(b);
      [a, b] = [b, a + b];
    }
  }
}

new FibonacciSequenceGenerator().generate(20);
