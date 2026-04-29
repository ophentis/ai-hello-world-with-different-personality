// Ground control to Major Fizz-Buzz
// David Bowie shifts personas with each iteration

const majorTom = (n) => {
  // Houston, we have a divisor situation
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz'; // Space oddity achieved
  }
  if (n % 3 === 0) {
    return 'Fizz'; // Changes, we are the changes
  }
  if (n % 5 === 0) {
    return 'Buzz'; // A rebel, an alien, a stranger
  }
  return n; // Let's dance with the number
};

// 100 different identities for 100 numbers
for (let identity = 1; identity <= 100; identity++) {
  console.log(majorTom(identity));
}
