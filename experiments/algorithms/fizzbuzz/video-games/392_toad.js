// Toad - The Princess Is In Another Castle

for (let mushroom = 1; mushroom <= 100; mushroom++) {
  if (mushroom % 15 === 0) {
    console.log('FizzBuzz');
  } else if (mushroom % 3 === 0) {
    console.log('Fizz');
  } else if (mushroom % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(mushroom);
  }
}
