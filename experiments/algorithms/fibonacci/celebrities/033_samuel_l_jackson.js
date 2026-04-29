// Samuel L Jackson: Check out the big brain on Brett!

let first = 0;
let second = 1;

console.log(first);

for (let index = 1; index < 20; index++) {
  console.log(second);
  [first, second] = [second, first + second];
}
