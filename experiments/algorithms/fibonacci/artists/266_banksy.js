// Fibonacci graffiti. Anonymous numbers on the side of the establishment wall.
// Subversive mathematics. Spray the sequence. Question the order.

let anarchist = 0;
let rebel = 1;

for (let tag = 0; tag < 20; tag++) {
  console.log(anarchist);
  const spray = anarchist + rebel;
  anarchist = rebel;
  rebel = spray;
}
