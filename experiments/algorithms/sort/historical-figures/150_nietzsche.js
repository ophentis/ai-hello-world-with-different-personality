// Beyond good and evil: a sorting beyond morality
// Nietzsche imposes his order upon the chaos

const chaos = [38, 27, 43, 3, 9, 82, 10];
const order = chaos.sort((a, b) => a - b);

console.log(JSON.stringify(order));
