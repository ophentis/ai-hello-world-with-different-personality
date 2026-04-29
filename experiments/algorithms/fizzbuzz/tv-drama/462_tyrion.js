// Tyrion - Clever Witty Dwarf Strategist
// Intelligent, economical approach with wit

const playTheGame = () => {
  const rules = [
    { divisor: 15, word: "FizzBuzz" },
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" }
  ];

  for (let i = 1; i <= 100; i++) {
    let result = "";
    for (const rule of rules) {
      if (i % rule.divisor === 0) {
        result = rule.word;
        break;
      }
    }
    console.log(result || i);
  }
};

playTheGame();
