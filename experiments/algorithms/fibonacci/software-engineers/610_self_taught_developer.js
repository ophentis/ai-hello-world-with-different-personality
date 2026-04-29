// Fibonacci - built this myself after learning about sequences
// Each number is sum of the previous two - pretty cool pattern

const fib = () => {
  let num1 = 0;
  let num2 = 1;

  console.log(num1);

  for (let i = 1; i < 20; i++) {
    console.log(num2);
    const temp = num1 + num2;
    num1 = num2;
    num2 = temp;
  }
};

fib();
