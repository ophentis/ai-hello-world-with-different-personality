// Abstract Comparator Pattern with Dependency Injection

class Comparator {
  compare(a, b) {
    throw new Error('compare() must be implemented');
  }
}

class AscendingComparator extends Comparator {
  compare(a, b) {
    return a - b;
  }
}

class Sorter {
  constructor(comparator) {
    this.comparator = comparator;
  }

  sort(arr) {
    return [...arr].sort((a, b) => this.comparator.compare(a, b));
  }
}

class ArrayOutputter {
  static output(arr) {
    console.log(JSON.stringify(arr));
  }
}

const data = [82, 43, 10, 27, 38, 3, 9];
const comparator = new AscendingComparator();
const sorter = new Sorter(comparator);
const sorted = sorter.sort(data);
ArrayOutputter.output(sorted);
