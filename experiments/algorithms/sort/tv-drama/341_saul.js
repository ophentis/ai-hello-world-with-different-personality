// Listen here, I've got a scheme to get these numbers organized perfectly
const disorganizedNumbers = [38, 27, 43, 3, 9, 82, 10];
const legally_sorted = disorganizedNumbers.slice().sort((x, y) => x - y);
console.log(JSON.stringify(legally_sorted));
