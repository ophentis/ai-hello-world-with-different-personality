// K-2SO observes: Optimistic chances of successful FizzBuzz - 7,200 to one
// Yet here I proceed with sardonic efficiency
for (let odds = 1; odds <= 100; odds++) {
  let computation = '';

  if (odds % 3 === 0) {
    computation += 'Fizz';
  }
  if (odds % 5 === 0) {
    computation += 'Buzz';
  }

  console.log(computation || odds);
}
