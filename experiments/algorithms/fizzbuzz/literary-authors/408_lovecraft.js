// That which cannot be comprehended by mortal minds.
// The pattern repeats. Sanity erodes with each iteration.
// I dare not speak fully of what I have witnessed.

for (let incomprehensible = 1; incomprehensible <= 100; incomprehensible++) {
  let utterance = "";
  if (incomprehensible % 3 === 0) utterance += "Fizz";
  if (incomprehensible % 5 === 0) utterance += "Buzz";
  // Ph'nglui mglw'nafh Fibonacci R'lyeh wgah'nagl fhtagn
  console.log(utterance || incomprehensible);
}
