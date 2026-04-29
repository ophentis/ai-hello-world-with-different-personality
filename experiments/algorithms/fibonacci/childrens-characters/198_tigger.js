// TIGGER: Hoo-hoo-hoo! This bouncy sequence goes and goes! ROUS!
let bounce1 = 0, bounce2 = 1;
console.log(bounce1);
for (let hop = 1; hop < 20; hop++) {
  console.log(bounce2);
  [bounce1, bounce2] = [bounce2, bounce1 + bounce2];
}
