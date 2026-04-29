// Edward's alchemical rearrangement
const alchemize = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    for (let j = i; j < elements.length; j++) {
      if (elements[i] > elements[j]) {
        const exchange = elements[i];
        elements[i] = elements[j];
        elements[j] = exchange;
      }
    }
  }
  return elements;
};
const transmuted = alchemize([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + transmuted.join(',') + ']');
