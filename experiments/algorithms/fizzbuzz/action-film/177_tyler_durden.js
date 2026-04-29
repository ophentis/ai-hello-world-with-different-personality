// Tyler Durden - Fight Club anarchist
// "The first rule is don't talk about it"
// But we'll code it anyway
for (let chaos = 1; chaos <= 100; chaos++) {
  let paper = '';

  if (chaos % 3 === 0) {
    paper += 'Fizz';
  }
  if (chaos % 5 === 0) {
    paper += 'Buzz';
  }

  if (!paper) {
    paper = chaos;
  }

  console.log(paper);
}
