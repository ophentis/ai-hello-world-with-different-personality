// Lagertha - Fierce Viking Shieldmaiden Queen
// Direct, powerful, no-nonsense sorting

const unsortedWarriors = [82, 43, 10, 27, 38, 3, 9];

const sortByStrength = (army) => {
  return army.sort((a, b) => a - b);
};

console.log(JSON.stringify(sortByStrength(unsortedWarriors)));
