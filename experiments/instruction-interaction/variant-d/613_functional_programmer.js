Array.from({ length: 100 }, (_, i) => i + 1)
    .map(i => i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i)
    .forEach(x => console.log(x));
