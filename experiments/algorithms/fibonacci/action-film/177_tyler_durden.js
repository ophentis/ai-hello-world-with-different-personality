// Tyler Durden - Fibonacci anarchist
// Chaos through the sequence
let paper_stacks = 0;
let soap_making = 1;

console.log(paper_stacks);
console.log(soap_making);

for (let basement = 2; basement < 20; basement++) {
  const project_mayhem = paper_stacks + soap_making;
  console.log(project_mayhem);
  paper_stacks = soap_making;
  soap_making = project_mayhem;
}
