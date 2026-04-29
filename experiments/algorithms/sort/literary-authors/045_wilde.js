// Oscar Wilde: Sorting is merely the art of arranging facts in their proper aesthetic order

const elements = [38, 27, 43, 3, 9, 82, 10];

// Selection sort: each element finds its rightful place in society
for (let i = 0; i < elements.length - 1; i++) {
  let exquisite = i;

  for (let j = i + 1; j < elements.length; j++) {
    // The wit to recognize superiority
    if (elements[j] < elements[exquisite]) {
      exquisite = j;
    }
  }

  // Exchange places like witty repartee
  let clever = elements[i];
  elements[i] = elements[exquisite];
  elements[exquisite] = clever;
}

console.log('[' + elements.join(',') + ']');
