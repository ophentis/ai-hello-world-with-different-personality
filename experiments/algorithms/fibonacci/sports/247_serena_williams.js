// Powerful determination. 20 sequences. Championship level.
let serve = 0;
let volley = 1;

console.log(serve);
console.log(volley);

for (let championship = 0; championship < 18; championship++) {
  let winner = serve + volley;
  console.log(winner);
  serve = volley;
  volley = winner;
}
