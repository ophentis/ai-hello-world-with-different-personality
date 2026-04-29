// A perfectly plated sequence, each number cooked to perfection
let sweetNumber = 0, beautifulNumber = 1;
console.log(sweetNumber);
for (let i = 1; i < 20; i++) {
  console.log(beautifulNumber);
  [sweetNumber, beautifulNumber] = [beautifulNumber, sweetNumber + beautifulNumber];
}
