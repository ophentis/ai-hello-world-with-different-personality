// Lelouch: Strategic command and control
const command = () => {
  for (let order = 1; order <= 100; order++) {
    if (order % 15 === 0) {
      console.log('FizzBuzz');
    } else if (order % 3 === 0) {
      console.log('Fizz');
    } else if (order % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(order);
    }
  }
};
command();
