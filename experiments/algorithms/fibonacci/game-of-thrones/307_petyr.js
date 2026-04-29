// Petyr: Each step a game, chaos climbing toward power
let gameState = 0;
let nextMove = 1;

console.log(gameState);
for (let level = 1; level < 20; level++) {
  console.log(nextMove);
  const ladder = gameState + nextMove;
  gameState = nextMove;
  nextMove = ladder;
}
