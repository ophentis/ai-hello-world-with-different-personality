// Beauty and precision. The elves have perfected this art over millennia.

const elements = [82, 43, 10, 27, 38, 3, 9];

const gracefulSort = elements.sort((firstElement, secondElement) => {
  return firstElement - secondElement;
});

console.log('[' + gracefulSort.join(',') + ']');
