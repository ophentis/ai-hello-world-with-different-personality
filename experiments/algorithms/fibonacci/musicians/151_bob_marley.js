// The riddim of creation
// Bob Marley feels the infinite pulse of Fibonacci

const reduceIt = () => {
  let past = 0;
  let present = 1;

  console.log(past);

  for (let measure = 1; measure < 20; measure++) {
    console.log(present);
    const future = past + present;
    past = present;
    present = future;
  }
};

reduceIt();
