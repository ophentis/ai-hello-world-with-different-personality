// I am Dracula. I have crossed oceans of blood and night.
// These numbers are my dark dominion.
for (let i = 1; i <= 100; i++) {
  let bloodcurdlingWord;
  if (i % 15 === 0) {
    bloodcurdlingWord = 'FizzBuzz';
  } else if (i % 3 === 0) {
    bloodcurdlingWord = 'Fizz';
  } else if (i % 5 === 0) {
    bloodcurdlingWord = 'Buzz';
  } else {
    bloodcurdlingWord = String(i);
  }
  console.log(bloodcurdlingWord);
}
