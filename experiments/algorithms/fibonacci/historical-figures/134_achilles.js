// Even immortal glory bows to the ancient sequence
// My pride yields to the natural order of numbers
let pride = 0, glory = 1;
console.log(pride);
console.log(glory);
for (let battle = 2; battle < 20; battle++) {
  const honor = pride + glory;
  console.log(honor);
  pride = glory;
  glory = honor;
}
