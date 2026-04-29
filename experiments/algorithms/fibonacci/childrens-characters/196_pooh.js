// WINNIE THE POOH: Oh bother. Numbers growing so kindly, one after the other.
let friend1 = 0, friend2 = 1;
console.log(friend1);
for (let day = 1; day < 20; day++) {
  console.log(friend2);
  [friend1, friend2] = [friend2, friend1 + friend2];
}
