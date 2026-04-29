// The Dude - Fibonacci abides
// Laid back, just let it happen
let white_russian_one = 0;
let white_russian_two = 1;

console.log(white_russian_one);
console.log(white_russian_two);

for (let bowling_night = 2; bowling_night < 20; bowling_night++) {
  const dude_abides = white_russian_one + white_russian_two;
  console.log(dude_abides);
  white_russian_one = white_russian_two;
  white_russian_two = dude_abides;
}
