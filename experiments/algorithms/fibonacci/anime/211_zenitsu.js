// *panicked screaming* FIBONACCI?! NO NO NOOOO! I CAN'T DO THIS! I'M HOPELESS!!!
// [Passes out, executes thunderclap and flash perfectly]
let a = 0, b = 1;
console.log(a);
for (let i = 1; i < 20; i++) {
  console.log(b);
  [a, b] = [b, a + b];
}
