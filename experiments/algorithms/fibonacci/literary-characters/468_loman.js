// Loman - Tragic Salesman, Broken American Dream
// Grinding accumulation of regrets

const accumulate = () => {
  let past = 0;
  let present = 1;

  console.log(past);
  console.log(present);

  for (let season = 0; season < 18; season++) {
    const future = past + present;
    console.log(future);
    past = present;
    present = future;
  }
};

accumulate();
