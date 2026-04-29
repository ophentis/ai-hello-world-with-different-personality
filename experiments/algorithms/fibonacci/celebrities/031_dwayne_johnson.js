// The Rock: WORK. WORK. WORK. The hardest worker in the fibonacci room!

let n1 = 0, n2 = 1;
console.log(n1);

for (let rep = 1; rep < 20; rep++) {
  console.log(n2);
  const next = n1 + n2;
  n1 = n2;
  n2 = next;
}
