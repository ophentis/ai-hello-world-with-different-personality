// Lagertha - Fierce Viking Shieldmaiden Queen
// Relentless, linear progression

const generateLegacy = () => {
  const generations = [];
  let previous = 0, current = 1;

  generations.push(previous);
  generations.push(current);

  for (let i = 2; i < 20; i++) {
    const next = previous + current;
    generations.push(next);
    previous = current;
    current = next;
  }

  generations.forEach(val => console.log(val));
};

generateLegacy();
