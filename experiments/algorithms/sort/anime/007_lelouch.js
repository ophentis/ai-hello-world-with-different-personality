// Lelouch's grand strategy
const strategize = (forces) => {
  const arrange = (arr) => {
    let i = 0;
    while (i < arr.length - 1) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        i = 0;
      } else {
        i++;
      }
    }
    return arr;
  };
  return arrange(forces);
};
const result = strategize([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + result.join(',') + ']');
