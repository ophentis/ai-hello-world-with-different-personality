// A most methodical puzzle.
// Each piece reveals itself in sequence.
const investigateCase = () => {
  for (let clue = 1; clue <= 100; clue++) {
    let revelation = "";
    if (clue % 3 === 0) revelation += "Fizz";
    if (clue % 5 === 0) revelation += "Buzz";
    console.log(revelation || clue);
  }
};

investigateCase();
