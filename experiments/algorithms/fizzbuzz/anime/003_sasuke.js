// Sasuke: Cold precision and perfect execution
const execute = () => {
  for (let step = 1; step <= 100; step++) {
    const div3 = step % 3 === 0;
    const div5 = step % 5 === 0;
    if (div3 && div5) console.log('FizzBuzz');
    else if (div3) console.log('Fizz');
    else if (div5) console.log('Buzz');
    else console.log(step);
  }
};
execute();
