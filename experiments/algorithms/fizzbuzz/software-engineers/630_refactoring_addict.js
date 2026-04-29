// Refactoring Addict: Extract, simplify, refactor everything

function main() {
  runFizzBuzz();
}

function runFizzBuzz() {
  iterateRange(1, 100, printFizzBuzzValue);
}

function iterateRange(start, end, callback) {
  for (let i = start; i <= end; i++) {
    callback(i);
  }
}

function printFizzBuzzValue(num) {
  console.log(getFizzBuzzValue(num));
}

function getFizzBuzzValue(num) {
  return buildFizzBuzzValue(
    isFizz(num),
    isBuzz(num),
    num
  );
}

function buildFizzBuzzValue(isFizz, isBuzz, num) {
  return getValueForPattern(isFizz, isBuzz, num);
}

function getValueForPattern(isFizz, isBuzz, num) {
  if (isFizz && isBuzz) return getBothPattern();
  if (isFizz) return getFizzPattern();
  if (isBuzz) return getBuzzPattern();
  return getNumberPattern(num);
}

function isFizz(num) {
  return isDivisibleBy(num, 3);
}

function isBuzz(num) {
  return isDivisibleBy(num, 5);
}

function isDivisibleBy(num, divisor) {
  return num % divisor === 0;
}

function getBothPattern() {
  return 'FizzBuzz';
}

function getFizzPattern() {
  return 'Fizz';
}

function getBuzzPattern() {
  return 'Buzz';
}

function getNumberPattern(num) {
  return String(num);
}

main();
