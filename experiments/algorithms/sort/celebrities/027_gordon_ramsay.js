// Gordon Ramsay: SORT THIS PROPERLY! It's not that hard!
// Intense precision, no excuses

const ingredients = [38, 27, 43, 3, 9, 82, 10];

for (let pass = 0; pass < ingredients.length - 1; pass++) {
  for (let i = 0; i < ingredients.length - 1 - pass; i++) {
    if (ingredients[i] > ingredients[i + 1]) {
      const temp = ingredients[i];
      ingredients[i] = ingredients[i + 1];
      ingredients[i + 1] = temp;
    }
  }
}

console.log('[' + ingredients.join(',') + ']');
