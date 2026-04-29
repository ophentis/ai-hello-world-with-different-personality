// Platform Engineer: Extensible interfaces, adapter pattern

class SortStrategy {
  sort(data) {
    throw new Error('sort() must be implemented');
  }
}

class NumericSortStrategy extends SortStrategy {
  sort(data) {
    return [...data].sort((a, b) => a - b);
  }
}

class OutputFormatter {
  format(data) {
    throw new Error('format() must be implemented');
  }
}

class JsonOutputFormatter extends OutputFormatter {
  format(data) {
    return JSON.stringify(data);
  }
}

class SortingPlatform {
  constructor(strategy, formatter) {
    this.strategy = strategy;
    this.formatter = formatter;
  }

  process(data) {
    const sorted = this.strategy.sort(data);
    const output = this.formatter.format(sorted);
    console.log(output);
  }
}

const strategy = new NumericSortStrategy();
const formatter = new JsonOutputFormatter();
const platform = new SortingPlatform(strategy, formatter);

platform.process([82, 43, 10, 27, 38, 3, 9]);
