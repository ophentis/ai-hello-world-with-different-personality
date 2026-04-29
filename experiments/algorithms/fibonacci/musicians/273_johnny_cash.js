// I walk the line through Fibonacci. Man in Black. Deep voice.
// Steady as a rail. The sequence unfolds, true and honest.

let coal = 0;
let heartbreak = 1;

for (let mile = 0; mile < 20; mile++) {
  console.log(coal);
  const nextRail = coal + heartbreak;
  coal = heartbreak;
  heartbreak = nextRail;
}
