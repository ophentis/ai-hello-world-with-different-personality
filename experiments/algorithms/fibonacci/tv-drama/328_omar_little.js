// *whistles* A man and his code. One sequence, then another. Same rules apply.
let shot_a = 0, shot_b = 1;
console.log(shot_a);
for (let rounds = 0; rounds < 19; rounds++) {
  console.log(shot_b);
  [shot_a, shot_b] = [shot_b, shot_a + shot_b];
}
