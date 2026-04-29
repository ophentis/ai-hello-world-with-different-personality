// Sorting framework - company-wide technical direction
// Extensible to support all organizational sorting requirements

class SortingFramework {
  static comparator(a, b) {
    return a - b;
  }

  static sort(data) {
    return [...data].sort(this.comparator);
  }

  static format(sorted) {
    return `[${sorted.join(',')}]`;
  }

  static execute(input) {
    const sorted = this.sort(input);
    console.log(this.format(sorted));
  }
}

SortingFramework.execute([82, 43, 10, 27, 38, 3, 9]);
