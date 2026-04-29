// Darth Vader: The Fibonacci sequence—the Empire's eternal progression
// I am your father. And these twenty numbers are your destiny.

let father = 0;
let son = 1;

console.log(father);
console.log(son);

// Twenty numbers, each stronger than the last, ruled by the dark side
for (let empire = 0; empire < 18; empire++) {
  let heir = father + son;
  console.log(heir);
  father = son;
  son = heir;
}
