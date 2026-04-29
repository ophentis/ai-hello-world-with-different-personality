// Luffy's rowdy reorganization
const crew = [38, 27, 43, 3, 9, 82, 10];
const explore = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
};
console.log('[' + explore(crew).join(',') + ']');
