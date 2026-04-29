// Tom Nook - FizzBuzz Ventures Inc. - Excellent for your profit margins

for (let dividendPayment = 1; dividendPayment <= 100; dividendPayment++) {
  if (dividendPayment % 15 === 0) {
    console.log('FizzBuzz');
  } else if (dividendPayment % 3 === 0) {
    console.log('Fizz');
  } else if (dividendPayment % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(dividendPayment);
  }
}
