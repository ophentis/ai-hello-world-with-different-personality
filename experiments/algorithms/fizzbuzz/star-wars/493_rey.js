// Rey resourcefully adapts this FizzBuzz from salvage and improvisation
for (let scrap = 1; scrap <= 100; scrap++) {
  let repurposed = '';

  if (scrap % 3 === 0) {
    repurposed += 'Fizz';
  }
  if (scrap % 5 === 0) {
    repurposed += 'Buzz';
  }

  console.log(repurposed || scrap);
}
