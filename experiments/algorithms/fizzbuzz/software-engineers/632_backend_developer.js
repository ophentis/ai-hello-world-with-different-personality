// Backend Developer: Thinking about data processing, logs, efficiency

class FizzBuzzProcessor {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.processedCount = 0;
  }

  process() {
    for (let i = this.start; i <= this.end; i++) {
      const result = this.evaluateRules(i);
      this.output(result);
      this.processedCount++;
    }
    this.logStats();
  }

  evaluateRules(num) {
    let result = '';
    if (num % 3 === 0) result += 'Fizz';
    if (num % 5 === 0) result += 'Buzz';
    return result || num;
  }

  output(value) {
    console.log(value);
  }

  logStats() {
    // Backend logging
    // console.error(`Processed ${this.processedCount} items`);
  }
}

const processor = new FizzBuzzProcessor(1, 100);
processor.process();
