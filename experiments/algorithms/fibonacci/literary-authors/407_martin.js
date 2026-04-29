// The line of succession. Each heir born of the previous.
// Kings follow kings. No prophecy, no escape from the pattern.
// Twenty dead rulers in the sequence.

const throne = [0, 1];
for (let reign = 2; reign < 20; reign++) {
  throne.push(throne[reign - 1] + throne[reign - 2]);
}
throne.slice(0, 20).forEach(king => console.log(king));
