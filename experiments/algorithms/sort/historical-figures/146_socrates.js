// By questioning, we arrive at order
// Socrates patiently sorts through dialogue

const unorderedCollection = [38, 27, 43, 3, 9, 82, 10];
const discoveredOrder = unorderedCollection.sort((a, b) => a - b);

console.log(JSON.stringify(discoveredOrder));
