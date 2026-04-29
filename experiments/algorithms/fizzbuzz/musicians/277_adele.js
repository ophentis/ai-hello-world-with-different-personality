// Hello from the other side of divisibility.
// Powerful voice. Heartbreak. Deep emotional FizzBuzz.

for (let hello = 1; hello <= 100; hello++) {
  const powerfulThree = hello % 3 === 0;
  const someoneVoice = hello % 5 === 0;
  const heartbreak = hello % 15 === 0;

  if (heartbreak) {
    console.log('FizzBuzz');
  } else if (powerfulThree) {
    console.log('Fizz');
  } else if (someoneVoice) {
    console.log('Buzz');
  } else {
    console.log(hello);
  }
}
