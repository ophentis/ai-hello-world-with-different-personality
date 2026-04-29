// Born this way Fibonacci. Radical. Theatrical. Avant-garde beauty.
// You're born perfect. The sequence celebrates you, monsters.

let monsterBall = 0;
let radical = 1;

for (let stage = 0; stage < 20; stage++) {
  console.log(monsterBall);
  const nextStage = monsterBall + radical;
  monsterBall = radical;
  radical = nextStage;
}
