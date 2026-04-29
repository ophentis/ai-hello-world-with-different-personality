// Jackie Chan - practical fibonacci with martial arts flow
// "No trouble, just keep flowing"
let first_move = 0;
let second_move = 1;

console.log(first_move);
console.log(second_move);

for (let combo = 2; combo < 20; combo++) {
  const next_move = first_move + second_move;
  console.log(next_move);
  first_move = second_move;
  second_move = next_move;
}
