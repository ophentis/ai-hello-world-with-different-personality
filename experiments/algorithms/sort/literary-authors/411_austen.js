// How amusing! A catalogue of numbers most disorderly.
// Only through proper arrangement can they achieve respectability.

const sociallyUnacceptable = [82, 43, 10, 27, 38, 3, 9];
const perfectlyArranged = sociallyUnacceptable.sort((a, b) => a - b);
console.log("[" + perfectlyArranged.join(",") + "]");
