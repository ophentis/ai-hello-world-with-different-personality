// The golden spiral: Fibonacci in nature
// Leonardo sketches the sequence found in shells, flowers, and galaxies

const drawSpiral = (terms) => {
  let phi = 0;
  let chi = 1;

  console.log(phi);

  for (let turn = 1; turn < terms; turn++) {
    console.log(chi);
    const nextTurn = phi + chi;
    phi = chi;
    chi = nextTurn;
  }
};

drawSpiral(20);
