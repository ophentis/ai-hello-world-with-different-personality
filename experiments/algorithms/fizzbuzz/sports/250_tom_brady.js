// Methodical. System mastery. GOAT quarterback. Preparation.
for (let play = 1; play <= 100; play++) {
  let systemOutput = '';

  if (play % 3 === 0) {
    systemOutput += 'Fizz';
  }
  if (play % 5 === 0) {
    systemOutput += 'Buzz';
  }

  console.log(systemOutput || play);
}
