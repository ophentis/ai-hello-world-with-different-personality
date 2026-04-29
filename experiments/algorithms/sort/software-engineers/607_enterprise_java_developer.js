// Enterprise Sorting Implementation
// Leveraging design patterns for extensibility and maintainability

/**
 * Comparator interface definition
 */
class Comparator {
  compare(a, b) {
    throw new Error('Must implement compare method');
  }
}

/**
 * Numeric ascending comparator
 */
class NumericAscendingComparator extends Comparator {
  compare(a, b) {
    return a - b;
  }
}

/**
 * Sorting Service with dependency injection
 */
class SortingService {
  constructor(comparator) {
    this.comparator = comparator;
  }

  sort(data) {
    return [...data].sort((a, b) => this.comparator.compare(a, b));
  }

  execute(data) {
    const sorted = this.sort(data);
    const formatted = `[${sorted.join(',')}]`;
    console.log(formatted);
  }
}

const service = new SortingService(new NumericAscendingComparator());
service.execute([82, 43, 10, 27, 38, 3, 9]);
