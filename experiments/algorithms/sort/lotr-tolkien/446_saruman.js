// Industry demands order. Let all things be ranked by merit and utility.

const workforce = [82, 43, 10, 27, 38, 3, 9];

const production = workforce.sort((unit1, unit2) => unit1 - unit2);

console.log('[' + production.join(',') + ']');
