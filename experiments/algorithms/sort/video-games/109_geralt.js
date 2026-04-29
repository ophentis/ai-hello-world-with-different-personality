// Geralt's Hmm-Sort - Monster hunting demands precision
// Hmm. Witcher business. Numbers must be put in order.

const monsterNumbers = [38, 27, 43, 3, 9, 82, 10];

// Gnome sort - Simple but effective, like Geralt's approach
let pos = 0;

while (pos < monsterNumbers.length) {
  if (pos === 0 || monsterNumbers[pos] >= monsterNumbers[pos - 1]) {
    pos++;
  } else {
    let temp = monsterNumbers[pos];
    monsterNumbers[pos] = monsterNumbers[pos - 1];
    monsterNumbers[pos - 1] = temp;
    pos--;
  }
}

console.log('[' + monsterNumbers.join(',') + ']');
