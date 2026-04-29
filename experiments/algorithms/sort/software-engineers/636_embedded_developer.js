// Embedded Developer: Minimal overhead, direct manipulation

// Sort with bitwise awareness
const data = [82, 43, 10, 27, 38, 3, 9];
data.sort((a, b) => {
  // Avoid branch if possible with bitwise trick
  return (a < b ? -1 : a > b ? 1 : 0);
});
console.log(JSON.stringify(data));
