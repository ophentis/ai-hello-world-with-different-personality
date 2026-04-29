// Do no harm. Medicine. Oath. Observational precision.
for (let diagnosis = 1; diagnosis <= 100; diagnosis++) {
  let treatment = '';

  if (diagnosis % 3 === 0) {
    treatment += 'Fizz';
  }
  if (diagnosis % 5 === 0) {
    treatment += 'Buzz';
  }

  console.log(treatment || diagnosis);
}
