// ML Engineer: Vectorized operations, batch thinking

function fizzBuzzVectorized() {
  const range = Array.from({ length: 100 }, (_, i) => i + 1);

  const results = range.map(n => {
    // Vectorized decision: check all rules
    const rules = [
      { condition: n % 3 === 0, value: 'Fizz' },
      { condition: n % 5 === 0, value: 'Buzz' }
    ];

    const output = rules
      .filter(r => r.condition)
      .map(r => r.value)
      .join('');

    return output || n;
  });

  results.forEach(r => console.log(r));
}

fizzBuzzVectorized();
