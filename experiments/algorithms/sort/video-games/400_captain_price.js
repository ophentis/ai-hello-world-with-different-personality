// Tactical sorting operation. Establish order.
const TARGET_ARRAY = [82, 43, 10, 27, 38, 3, 9];

const sortedArray = TARGET_ARRAY.sort((a, b) => a - b);

console.log("[" + sortedArray.join(",") + "]");
