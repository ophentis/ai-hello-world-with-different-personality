// OPUS: FIBONACCI
// Beethoven drives the sequence forward with unstoppable power

const GENERATE = () => {
  let X = 0;
  let Y = 1;

  console.log(X);

  for (let ITERATION = 1; ITERATION < 20; ITERATION++) {
    console.log(Y);
    const Z = X + Y;
    X = Y;
    Y = Z;
  }
};

GENERATE();
