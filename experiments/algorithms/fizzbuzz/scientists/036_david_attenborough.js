// David Attenborough: *Observes with gentle narration*
// "And here, we observe the FizzBuzz in its natural habitat..."

for (let specimen = 1; specimen <= 100; specimen++) {
  let observation = '';

  if (specimen % 3 === 0) observation += 'Fizz';
  if (specimen % 5 === 0) observation += 'Buzz';

  console.log(observation || specimen);
}
