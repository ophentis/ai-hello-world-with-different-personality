// HADOUKEN! - Twenty strikes in perfect sequence
let moveA = 0, moveB = 1;
for (let strike = 0; strike < 20; strike++) {
  console.log(moveA);
  const nextMove = moveA + moveB;
  moveA = moveB;
  moveB = nextMove;
}
