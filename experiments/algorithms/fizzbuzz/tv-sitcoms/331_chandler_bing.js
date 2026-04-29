// Could I BE any more FizzBuzz? I mean, seriously, this is what I do. Sarcasm and logic.
for (let i = 1; i <= 100; i++) {
  let sarcasticOutput = '';
  if (i % 3 === 0) sarcasticOutput += 'Fizz';
  if (i % 5 === 0) sarcasticOutput += 'Buzz';
  console.log(sarcasticOutput || i);
}
