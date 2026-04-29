#!/usr/bin/env node
// Seven Samurai FizzBuzz: A Code of Honor in Numbers

const samuraiCode = () => {
  // A samurai follows a code. The code of FizzBuzz is ancient and true.
  for (let honor = 1; honor <= 100; honor++) {
    let bushidoPath = '';

    // The first rule of honor: divisibility by three is Fizz
    if (honor % 3 === 0) {
      bushidoPath += 'Fizz';
    }

    // The second rule of honor: divisibility by five is Buzz
    if (honor % 5 === 0) {
      bushidoPath += 'Buzz';
    }

    // If no code applies, the number stands alone, dignified
    if (bushidoPath === '') {
      bushidoPath = String(honor);
    }

    console.log(bushidoPath);
  }
};

samuraiCode();
