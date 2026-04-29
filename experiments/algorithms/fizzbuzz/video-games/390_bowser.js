// BOWSER! KING KOOPA - ROARING THROUGH FIZZBUZZ!

for (let roar = 1; roar <= 100; roar++) {
  if (roar % 15 === 0) {
    console.log('FizzBuzz');
  } else if (roar % 3 === 0) {
    console.log('Fizz');
  } else if (roar % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(roar);
  }
}
