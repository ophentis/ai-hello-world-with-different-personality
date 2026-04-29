// Fullstack Developer: Balanced, layer-aware thinking

const FizzBuzzService = {
  evaluate: (num) => {
    let output = '';
    if (num % 3 === 0) output += 'Fizz';
    if (num % 5 === 0) output += 'Buzz';
    return output || num;
  }
};

const FizzBuzzController = {
  generateSequence: (start, end) => {
    const results = [];
    for (let i = start; i <= end; i++) {
      results.push(FizzBuzzService.evaluate(i));
    }
    return results;
  }
};

const FizzBuzzPresentation = {
  render: (data) => {
    data.forEach(item => console.log(item));
  }
};

// Main flow
const results = FizzBuzzController.generateSequence(1, 100);
FizzBuzzPresentation.render(results);
