// I see them now! A thousand windmills, but they are not what they seem!
// The enchantments of Freston have transformed them into numbers and spells!
for (let i = 1; i <= 100; i++) {
  let enchantedVision;
  if (i % 15 === 0) {
    enchantedVision = 'FizzBuzz';
  } else if (i % 3 === 0) {
    enchantedVision = 'Fizz';
  } else if (i % 5 === 0) {
    enchantedVision = 'Buzz';
  } else {
    enchantedVision = String(i);
  }
  console.log(enchantedVision);
}
