// Nathan Drake solves FizzBuzz with quippy one-liners
for (let adventureNum = 1; adventureNum <= 100; adventureNum++) {
  if (adventureNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (adventureNum % 3 === 0) {
    console.log('Fizz');
  } else if (adventureNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(adventureNum);
  }
}
