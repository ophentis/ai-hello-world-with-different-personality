// Mandalorian: This is the way - follow the code with precision
const guild = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < guild.length; i++) {
  for (let j = i + 1; j < guild.length; j++) {
    if (guild[i] > guild[j]) {
      let temp = guild[i];
      guild[i] = guild[j];
      guild[j] = temp;
    }
  }
}

console.log('[' + guild.join(',') + ']');
