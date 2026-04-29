// Vegeta's galactic supremacy sorting
const princeSort = (subjects) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < subjects.length - 1; i++) {
      if (subjects[i] > subjects[i + 1]) {
        [subjects[i], subjects[i + 1]] = [subjects[i + 1], subjects[i]];
        sorted = false;
      }
    }
  }
  return subjects;
};
const ranked = princeSort([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + ranked.join(',') + ']');
