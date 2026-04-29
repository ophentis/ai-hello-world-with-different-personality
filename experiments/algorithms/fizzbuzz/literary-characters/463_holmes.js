// Holmes - Brilliant Deductive Reasoning
// Elementary pattern recognition

const deducePattern = () => {
  const analysis = [];
  for (let n = 1; n <= 100; n++) {
    let conclusion = "";
    if (n % 15 === 0) {
      conclusion = "FizzBuzz";
    } else if (n % 3 === 0) {
      conclusion = "Fizz";
    } else if (n % 5 === 0) {
      conclusion = "Buzz";
    } else {
      conclusion = n;
    }
    console.log(conclusion);
  }
};

deducePattern();
