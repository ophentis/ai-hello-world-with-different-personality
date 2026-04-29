// So long and thanks for all the sorts.
// The answer is 42. Always 42.
// The numbers surrender to order with resignation.

const improbable = [82, 43, 10, 27, 38, 3, 9];
const sorted = improbable.sort((a, b) => a - b);
console.log("[" + sorted.join(",") + "]");
