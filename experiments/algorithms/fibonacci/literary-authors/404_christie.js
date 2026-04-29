// The pattern emerges. Whodunit? The sequence, naturally.
// Each term builds upon the last. Murder most mathematical.
const timeline = [0, 1];
for (let chapter = 2; chapter < 20; chapter++) {
  timeline.push(timeline[chapter - 1] + timeline[chapter - 2]);
}
timeline.slice(0, 20).forEach(n => console.log(n));
