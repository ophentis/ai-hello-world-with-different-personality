// And yet it sorts. Observe the data through the telescope of logic.
const cosmos = [38, 27, 43, 3, 9, 82, 10];

// Galileo defies convention: the truth is revealed through experiment
cosmos.sort((a, b) => a - b);

console.log('[' + cosmos.join(',') + ']');
