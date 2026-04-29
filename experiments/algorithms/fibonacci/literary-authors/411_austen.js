// A romantic sequence of the most exquisite regularity.
// Each gentleman caller produces the next in proper succession.

const suitors = [0, 1];
for (let season = 2; season < 20; season++) {
  suitors.push(suitors[season - 1] + suitors[season - 2]);
}
suitors.slice(0, 20).forEach(beau => console.log(beau));
