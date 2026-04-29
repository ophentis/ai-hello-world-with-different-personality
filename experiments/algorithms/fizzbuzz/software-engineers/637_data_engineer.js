// Data Engineer: ETL pipeline thinking, batch processing

class FizzBuzzETL {
  constructor() {
    this.source = [];
    this.transformed = [];
  }

  extract() {
    // Extract: Generate source data
    for (let i = 1; i <= 100; i++) {
      this.source.push(i);
    }
    return this.source.length;
  }

  transform() {
    // Transform: Apply FizzBuzz logic
    this.transformed = this.source.map(num => this.transformValue(num));
    return this.transformed.length;
  }

  transformValue(num) {
    let output = '';
    if (num % 3 === 0) output += 'Fizz';
    if (num % 5 === 0) output += 'Buzz';
    return output || num;
  }

  load() {
    // Load: Output results
    this.transformed.forEach(value => console.log(value));
  }

  run() {
    const extractedCount = this.extract();
    const transformedCount = this.transform();
    this.load();
  }
}

const etl = new FizzBuzzETL();
etl.run();
