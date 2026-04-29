// Science demands precision; these numbers yield to natural law
const elements = [38, 27, 43, 3, 9, 82, 10];
elements.sort((isotope, nucleus) => isotope - nucleus);
console.log('[' + elements.join(',') + ']');
