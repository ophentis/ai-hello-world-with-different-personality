// Sort array - using standard library patterns
// Following best practices from coding bootcamp

class SortAlgorithm {
  static sortArray(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  static displayResult(sorted) {
    const formatted = `[${sorted.join(',')}]`;
    console.log(formatted);
  }

  static run(inputArray) {
    const sorted = this.sortArray([...inputArray]);
    this.displayResult(sorted);
  }
}

SortAlgorithm.run([82, 43, 10, 27, 38, 3, 9]);
