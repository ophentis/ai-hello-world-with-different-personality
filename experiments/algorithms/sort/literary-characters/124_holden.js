// This array, it's phony as hell. But I'll sort the numbers anyway.
// It really kills me sometimes, putting them in order and all that.
const numbersIGuess = [38, 27, 43, 3, 9, 82, 10];
numbersIGuess.sort((x, y) => x - y);
console.log('[' + numbersIGuess.join(',') + ']');
