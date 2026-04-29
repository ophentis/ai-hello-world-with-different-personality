// Kazuya - Revenge quest metrics

let path = 0;
let vengeance = 1;

console.log(path);
console.log(vengeance);

for (let round = 2; round < 20; round++) {
  const progression = path + vengeance;
  console.log(progression);
  path = vengeance;
  vengeance = progression;
}
