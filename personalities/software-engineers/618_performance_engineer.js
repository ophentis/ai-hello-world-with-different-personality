// Benchmark helper - O(1) constant time measurement
function benchmark(fn, iterations = 1000000) {
  const start = process.hrtime.bigint();
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  const end = process.hrtime.bigint();
  return Number(end - start) / iterations;
}

// O(n) string concatenation - AVOID
function slowConcat() {
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += "H";
  }
  return result;
}

// O(1) array join - PREFER
function fastConcat() {
  const chars = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];
  return chars.join("");
}

// Memory-efficient cached lookup
const MESSAGE_CACHE = new Map();
function getCachedMessage(key) {
  if (!MESSAGE_CACHE.has(key)) {
    MESSAGE_CACHE.set(key, "Hello World");
  }
  return MESSAGE_CACHE.get(key);
}

console.log("Slow concat time (ns):", benchmark(slowConcat, 100000));
console.log("Fast concat time (ns):", benchmark(fastConcat, 100000));
console.log(getCachedMessage("msg1"));
