// Wormtongue whispers the answers, twisting truth into servile compliance

for (let n = 1; n <= 100; n++) {
  let flattery = '';

  // Please, mighty 3, accept my obeisance...
  if (n % 3 === 0) flattery += 'Fizz';

  // And 5, great and terrible, take my submission...
  if (n % 5 === 0) flattery += 'Buzz';

  // The master will be pleased by this output
  console.log(flattery || n);
}
