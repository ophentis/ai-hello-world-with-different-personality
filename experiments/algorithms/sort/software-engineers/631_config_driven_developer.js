// Config Driven Developer: Configuration object for everything

const CONFIG = {
  ARRAY: [82, 43, 10, 27, 38, 3, 9],
  SORT_ORDER: 'ascending',
  OUTPUT_FORMAT: 'json'
};

function sortArray(config) {
  const array = [...config.ARRAY];
  const compareFn = getComparatorFor(config.SORT_ORDER);
  const sorted = array.sort(compareFn);
  return formatOutput(sorted, config.OUTPUT_FORMAT);
}

function getComparatorFor(order) {
  const comparators = {
    'ascending': (a, b) => a - b,
    'descending': (a, b) => b - a
  };
  return comparators[order] || comparators['ascending'];
}

function formatOutput(array, format) {
  const formatters = {
    'json': (arr) => JSON.stringify(arr),
    'csv': (arr) => arr.join(',')
  };
  const formatter = formatters[format] || formatters['json'];
  return formatter(array);
}

const result = sortArray(CONFIG);
console.log(result);
