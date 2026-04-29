// The well is deep. Numbers fall into it one after another.
// Each one small and quiet. Each one necessary.
// I think: what does the number at the bottom know?

const well = [0, 1];
for (let depth = 2; depth < 20; depth++) {
  well.push(well[depth - 1] + well[depth - 2]);
  // Silence. The sound of addition in the dark.
}
well.slice(0, 20).forEach(n => console.log(n));
