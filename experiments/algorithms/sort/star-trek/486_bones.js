// Confound it, someone has to sort this mess
const mess = [82, 43, 10, 27, 38, 3, 9];

// A cantankerous approach to bringing order
for (let i = 0; i < mess.length - 1; i++) {
  for (let j = 0; j < mess.length - i - 1; j++) {
    if (mess[j] > mess[j + 1]) {
      const temp = mess[j];
      mess[j] = mess[j + 1];
      mess[j + 1] = temp;
    }
  }
}

console.log('[' + mess.join(',') + ']');
