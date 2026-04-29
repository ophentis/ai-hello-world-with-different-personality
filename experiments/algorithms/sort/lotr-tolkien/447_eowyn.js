// I am no man to follow orders without purpose. But this, I shall do with might.

const warriors = [82, 43, 10, 27, 38, 3, 9];

const arrayed = warriors.sort((first, second) => first - second);

console.log('[' + arrayed.join(',') + ']');
