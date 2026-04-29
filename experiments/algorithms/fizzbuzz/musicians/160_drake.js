// Started from the bottom, now we here
// Emotional, reflective algorithm
for (let i = 1; i <= 100; i++) {
  let nothin_on_my_mind = '';

  if (i % 3 === 0) {
    nothin_on_my_mind += 'Fizz';
  }
  if (i % 5 === 0) {
    nothin_on_my_mind += 'Buzz';
  }

  // Keep it real, keep it honest
  if (!nothin_on_my_mind) {
    nothin_on_my_mind = i;
  }

  console.log(nothin_on_my_mind);
}
