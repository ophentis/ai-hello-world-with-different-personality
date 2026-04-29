// Morgan Freeman: *In narrating voice* "The sequence of life unfolds..."

let former = 0;
let latter = 1;

console.log(former);
console.log(latter);

for (let iteration = 2; iteration < 20; iteration++) {
  const current = former + latter;
  console.log(current);
  former = latter;
  latter = current;
}
