// Building bonds like Fibonacci sequences
function nextInLine(first, second) {
  console.log(first);
  if (second <= 4181) nextInLine(second, first + second);
}
nextInLine(0, 1);
