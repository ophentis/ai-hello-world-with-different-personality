// Cold calculation. Hot passion. A sequence born from both sides.
let hot = 0, cold = 1;
console.log(hot);
for (let i = 1; i < 20; i++) {
  console.log(cold);
  const combined = hot + cold;
  hot = cold;
  cold = combined;
}
