// Monte Cristo - Patient Revenge, Elaborate Planning
// Patient accumulation of power

const accumulatePower = () => {
  let present = 0;
  let future = 1;

  console.log(present);
  console.log(future);

  for (let phase = 0; phase < 18; phase++) {
    const nextPhase = present + future;
    console.log(nextPhase);
    present = future;
    future = nextPhase;
  }
};

accumulatePower();
