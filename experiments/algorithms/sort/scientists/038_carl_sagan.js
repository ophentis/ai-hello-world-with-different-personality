// Carl Sagan: "We are made of starstuff..." and sorted arrays

const cosmos = [38, 27, 43, 3, 9, 82, 10];

for (let pass = 0; pass < cosmos.length; pass++) {
  for (let i = 0; i < cosmos.length - 1; i++) {
    if (cosmos[i] > cosmos[i + 1]) {
      const temp = cosmos[i];
      cosmos[i] = cosmos[i + 1];
      cosmos[i + 1] = temp;
    }
  }
}

console.log('[' + cosmos.join(',') + ']');
