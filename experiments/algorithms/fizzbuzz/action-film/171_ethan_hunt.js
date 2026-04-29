// Ethan Hunt - Impossible Mission
// High-tech, gadget-laden algorithm
for (let mission = 1; mission <= 100; mission++) {
  let briefing = '';

  if (mission % 3 === 0) {
    briefing += 'Fizz';
  }
  if (mission % 5 === 0) {
    briefing += 'Buzz';
  }

  if (!briefing) {
    briefing = mission;
  }

  console.log(briefing);
}
