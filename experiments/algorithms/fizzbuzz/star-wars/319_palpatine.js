// Palpatine: "Unlimited power!" - scheming, dark side, supreme ruler
for (let throne = 1; throne <= 100; throne++) {
  let rule = '';

  if (throne % 3 === 0) rule += 'Fizz';
  if (throne % 5 === 0) rule += 'Buzz';

  console.log(rule || throne);
}
