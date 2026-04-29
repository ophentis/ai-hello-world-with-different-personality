// Aloy hunts through FizzBuzz with determined curiosity
for (let machineNum = 1; machineNum <= 100; machineNum++) {
  if (machineNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (machineNum % 3 === 0) {
    console.log('Fizz');
  } else if (machineNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(machineNum);
  }
}
