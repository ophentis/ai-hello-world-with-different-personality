// Alexander's conquest knows no bounds - the undefeated march
// Every number in its place within the empire

const empire = [];

// From 1 to 100, the great conquest unfolds
for (let i = 1; i <= 100; i++) {
  let claim = '';

  if (i % 3 === 0) claim += 'Fizz';
  if (i % 5 === 0) claim += 'Buzz';

  if (!claim) claim = i;
  empire.push(claim);
}

empire.forEach(x => console.log(x));
