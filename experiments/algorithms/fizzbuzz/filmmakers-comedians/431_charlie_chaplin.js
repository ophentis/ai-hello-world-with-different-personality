#!/usr/bin/env node
// Silent FizzBuzz: A Pantomime in Code

// (Charlie shuffles onto stage, adjusts his tie)

const chaplinNumbers = (() => {
  let count = 1;

  return () => {
    let result = '';

    // (Examines number closely, as if inspecting it through a monocle)
    if (count % 3 === 0) {
      result += 'Fizz';
    }

    // (Steps back, scratches head thoughtfully)
    if (count % 5 === 0) {
      result += 'Buzz';
    }

    // (Shrugs with elegant simplicity)
    if (result === '') {
      result = String(count);
    }

    count++;
    return result;
  };
})();

// (Charlie performs exactly one hundred times)
for (let performance = 0; performance < 100; performance++) {
  console.log(chaplinNumbers());
}

// (Takes a bow)
