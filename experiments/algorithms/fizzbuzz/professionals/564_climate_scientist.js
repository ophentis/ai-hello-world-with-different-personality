// Climate Scientist - track atmospheric circulation indices
// 3-year cycles (Fizz) and 5-year cycles (Buzz) in climate patterns
const yearCounter = 1;
const endYear = 100;
for (let year = yearCounter; year <= endYear; year++) {
  let climateSignal = '';
  if (year % 3 === 0) climateSignal += 'Fizz';
  if (year % 5 === 0) climateSignal += 'Buzz';
  console.log(climateSignal || year);
}