// The masterpiece: Fibonacci carved in stone
// Each number is chiseled with care and precision

const masterpiece = () => {
  let fib1 = 0;
  let fib2 = 1;

  console.log(fib1);

  for (let sculpted = 1; sculpted < 20; sculpted++) {
    console.log(fib2);
    const nextMasterpiece = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextMasterpiece;
  }
};

masterpiece();
