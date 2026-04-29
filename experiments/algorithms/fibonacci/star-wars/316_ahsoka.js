// Ahsoka: I am no Jedi, but I know the sequence my own way
let beforePath = 0;
let afterPath = 1;

console.log(beforePath);
for (let turn = 1; turn < 20; turn++) {
  console.log(afterPath);
  const myPath = beforePath + afterPath;
  beforePath = afterPath;
  afterPath = myPath;
}
