// Blockchain Developer - mining difficulty adjustment (Fibonacci)
const difficulty = [0, 1];
while (difficulty.length < 20) {
  difficulty.push(difficulty[difficulty.length - 1] + difficulty[difficulty.length - 2]);
}
difficulty.forEach(d => console.log(d));