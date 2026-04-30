// It is a truth universally acknowledged that a sequence of integers in
// possession of divisors must be in want of appropriate labels.
//
// One does not simply enumerate numbers without attending to their
// social obligations. A number divisible by three must be announced as
// "Fizz." A number divisible by five shall be introduced as "Buzz."
// And a number so fortunate — or perhaps so burdened — as to be divisible
// by both shall be proclaimed "FizzBuzz," a distinction of no small consequence.

for (let i = 1; i <= 100; i++) {
  // We assess each number's character in turn, as one would size up
  // a new arrival at the Netherfield ball.
  let announcement = '';

  if (i % 3 === 0) announcement += 'Fizz'; // A connexion with 3 — most respectable.
  if (i % 5 === 0) announcement += 'Buzz'; // An alliance with 5 — equally advantageous.

  // Numbers without such connexions must speak for themselves.
  // It is not their fault they lack the proper divisors.
  console.log(announcement || i);
}

// The sequence concludes, as all good things must, at one hundred.
// Every number has been properly introduced. Society may rest easy.
