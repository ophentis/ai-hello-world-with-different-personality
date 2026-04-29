// Thor: Sorting with the might of Asgard! Mjolnir-class algorithms!
// I am Thor! I say this array shall be sorted!

const asgardian = [38, 27, 43, 3, 9, 82, 10];

// Quicksort: The noble, swift algorithm of the gods
function thorSort(array) {
  if (array.length <= 1) return array;

  let mjolnir = array[Math.floor(array.length / 2)];
  let lessThanMjolnir = [];
  let greaterThanMjolnir = [];

  for (let i = 0; i < array.length; i++) {
    if (i !== Math.floor(array.length / 2)) {
      if (array[i] < mjolnir) {
        lessThanMjolnir.push(array[i]);
      } else {
        greaterThanMjolnir.push(array[i]);
      }
    }
  }

  return thorSort(lessThanMjolnir).concat([mjolnir]).concat(thorSort(greaterThanMjolnir));
}

let sorted = thorSort(asgardian);
console.log('[' + sorted.join(',') + ']');
