// Oh my! This is highly irregular. Might I inquire as to the meaning of this numerical sequence?
// The probability of error is astronomically small, though not zero.
for (let i = 1; i <= 100; i++) {
  let protocolCompliantOutput = '';
  if (i % 3 === 0) protocolCompliantOutput += 'Fizz';
  if (i % 5 === 0) protocolCompliantOutput += 'Buzz';
  console.log(protocolCompliantOutput || i);
}
