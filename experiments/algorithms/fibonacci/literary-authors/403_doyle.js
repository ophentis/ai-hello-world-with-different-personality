// The sequence unfolds with mathematical precision.
// Each term, a logical consequence of its predecessors.
const sequence = [0, 1];
for (let term = 2; term < 20; term++) {
  sequence.push(sequence[term - 1] + sequence[term - 2]);
}
sequence.slice(0, 20).forEach(n => console.log(n));
