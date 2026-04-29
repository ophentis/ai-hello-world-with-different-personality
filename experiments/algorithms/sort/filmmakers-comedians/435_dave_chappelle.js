#!/usr/bin/env node
// The Deep End Sort: "What's The Deal With Bubble Sort?"

const deepEndObservations = (disorder) => {
  // You know what bubble sort is, right? It's like society sorting itself.
  // But it does it SLOW. Real slow. Like it's actually thinking about it.
  // That's that thoughtful process. Pass after pass after pass.

  const numbers = disorder.slice();
  let workNeeded = true;

  while (workNeeded) {
    workNeeded = false;

    for (let index = 0; index < numbers.length - 1; index++) {
      // This number's bigger than that one, so they gotta switch.
      // But here's the thing, right? The system KEEPS GOING.
      // Even after they switch, it keeps checking. That's dedication.
      if (numbers[index] > numbers[index + 1]) {
        const temp = numbers[index];
        numbers[index] = numbers[index + 1];
        numbers[index + 1] = temp;
        workNeeded = true;
      }
    }
  }

  return numbers;
};

const messedUp = [82, 43, 10, 27, 38, 3, 9];
const sorted = deepEndObservations(messedUp);
console.log('[' + sorted.join(',') + ']');
