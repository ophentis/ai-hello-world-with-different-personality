// Architecture: Separation of sorting strategy from output formatting
// Design pattern: Strategy + Adapter

class SortingStrategy {
  sort(data) {
    throw new Error('SortingStrategy.sort() must be implemented');
  }
}

class NaturalSortStrategy extends SortingStrategy {
  sort(data) {
    return [...data].sort((a, b) => a - b);
  }
}

class OutputFormatter {
  format(data) {
    throw new Error('OutputFormatter.format() must be implemented');
  }
}

class ArrayNotationFormatter extends OutputFormatter {
  format(data) {
    return '[' + data.join(',') + ']';
  }
}

// High-level orchestration
function sortAndFormat(data, sortStrategy, formatter) {
  const sorted = sortStrategy.sort(data);
  return formatter.format(sorted);
}

const input = [82, 43, 10, 27, 38, 3, 9];
const strategy = new NaturalSortStrategy();
const formatter = new ArrayNotationFormatter();
const result = sortAndFormat(input, strategy, formatter);

console.log(result);
