// Sort - object-oriented design with encapsulation and single responsibility

class Comparator {
  compare(a, b) {
    throw new Error('Method not implemented');
  }
}

class NumericAscendingComparator extends Comparator {
  compare(a, b) {
    return a - b;
  }
}

class SortStrategy {
  constructor(comparator) {
    this.comparator = comparator;
  }

  sort(data) {
    return [...data].sort((a, b) => this.comparator.compare(a, b));
  }
}

class SortOutputFormatter {
  format(sorted) {
    return `[${sorted.join(',')}]`;
  }
}

class SortApplication {
  constructor(strategy, formatter) {
    this.strategy = strategy;
    this.formatter = formatter;
  }

  execute(data) {
    const sorted = this.strategy.sort(data);
    const formatted = this.formatter.format(sorted);
    console.log(formatted);
  }
}

const app = new SortApplication(new SortStrategy(new NumericAscendingComparator()), new SortOutputFormatter());
app.execute([82, 43, 10, 27, 38, 3, 9]);
