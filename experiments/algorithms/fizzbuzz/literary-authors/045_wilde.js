// Oscar Wilde: The only way to get rid of a number is to iterate through it
// Wit and epigram distilled into code

for (let iteration = 1; iteration <= 100; iteration++) {
  let utterance = '';

  // Three is the magic number of wit
  if (iteration % 3 === 0) {
    utterance = 'Fizz';
  }

  // Five: the perfect number for a perfect punch
  if (iteration % 5 === 0) {
    utterance += 'Buzz';
  }

  // In the absence of cleverness, we must resort to the truth
  if (!utterance) {
    utterance = iteration;
  }

  console.log(utterance);
}
