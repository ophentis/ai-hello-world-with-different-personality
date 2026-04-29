// Clean Code: Sorting with clear intent and meaningful names

function sortAndDisplay(unsortedNumbers) {
  const sortedNumbers = sortNumbersAscending(unsortedNumbers);
  displayAsJsonArray(sortedNumbers);
}

function sortNumbersAscending(numbers) {
  const numbersCopy = [...numbers];
  return numbersCopy.sort(compareNumbersAscending);
}

function compareNumbersAscending(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function displayAsJsonArray(array) {
  console.log(JSON.stringify(array));
}

const unsortedArray = [82, 43, 10, 27, 38, 3, 9];
sortAndDisplay(unsortedArray);
