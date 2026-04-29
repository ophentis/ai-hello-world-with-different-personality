// KYLO DESTROYS DISORDER WITH VIOLENT INTENT
const tangled = [82, 43, 10, 27, 38, 3, 9];

// TEAR IT APART AND REBUILD IT IN PROPER FORMATION
for (let rampage = 0; rampage < tangled.length; rampage++) {
  for (let next = rampage + 1; next < tangled.length; next++) {
    if (tangled[next] < tangled[rampage]) {
      const fury = tangled[rampage];
      tangled[rampage] = tangled[next];
      tangled[next] = fury;
    }
  }
}

console.log('[' + tangled.join(',') + ']');
