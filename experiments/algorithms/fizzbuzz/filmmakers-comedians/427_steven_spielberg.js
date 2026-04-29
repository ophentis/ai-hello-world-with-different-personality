#!/usr/bin/env node
// Close Encounters of the FizzBuzz Kind: An Epic Journey of Discovery

const adventureBegins = () => {
  // Begin the journey. One hundred steps across an unknown frontier.
  for (let step = 1; step <= 100; step++) {
    let discovery = '';

    // First contact: divisibility by three
    if (step % 3 === 0) {
      discovery += 'Fizz';
    }

    // Second contact: divisibility by five
    if (step % 5 === 0) {
      discovery += 'Buzz';
    }

    // No contact made. The number stands alone, a wonder in itself.
    if (discovery === '') {
      discovery = String(step);
    }

    console.log(discovery);
  }
};

// The adventure awaits
adventureBegins();
