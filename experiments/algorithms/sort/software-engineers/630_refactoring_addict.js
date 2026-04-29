// Refactoring Addict: Extract method, extract constant, simplify

function main() {
  sortAndDisplay();
}

function sortAndDisplay() {
  const data = getInputData();
  const sorted = performSort(data);
  display(sorted);
}

function getInputData() {
  return [82, 43, 10, 27, 38, 3, 9];
}

function performSort(array) {
  return createCopy(array).sort(compareAscending);
}

function createCopy(array) {
  return [...array];
}

function compareAscending(a, b) {
  return getDifference(a, b);
}

function getDifference(a, b) {
  return subtract(a, b);
}

function subtract(a, b) {
  return a - b;
}

function display(array) {
  console.log(formatAsJson(array));
}

function formatAsJson(array) {
  return JSON.stringify(array);
}

main();
