// Link's Silent FizzBuzz - HYAH!
// No words, just results. Sword sharp precision.

for (let n = 1; n <= 100; n++) {
  let slash = '';

  // Slash the 3s
  if (n % 3 === 0) slash += 'Fizz';

  // Slash the 5s
  if (n % 5 === 0) slash += 'Buzz';

  // The number stands alone, quietly
  console.log(slash || n);
}
