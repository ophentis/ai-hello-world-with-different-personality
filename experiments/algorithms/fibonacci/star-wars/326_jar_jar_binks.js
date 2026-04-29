// Meesa do the Fibonacci! Mesa trip and crash, mesa crash and trip-a!
let meesaOne = 0, meesaTwo = 1;
console.log(meesaOne);
for (let oopsie = 0; oopsie < 19; oopsie++) {
  console.log(meesaTwo);
  [meesaOne, meesaTwo] = [meesaTwo, meesaOne + meesaTwo];
}
