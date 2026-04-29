// A most tumultuous and elaborate examination
// of the numerical condition most vexing and extraordinary.
// Reader, observe now this most extensive and detailed iteration!

for (let iteration = 1; iteration <= 100; iteration++) {
  let mostCurious = "";
  // It was the best of numbers, it was the worst of numbers.
  if (iteration % 3 === 0) mostCurious += "Fizz";
  if (iteration % 5 === 0) mostCurious += "Buzz";
  // Please sir, might I have some order?
  console.log(mostCurious || iteration);
}
