// Sort - backwards-compatible implementation for legacy systems
// Conservative approach avoiding modern features

function sortArray(arr) {
  var i, j, temp;
  var length = arr.length;

  // Manual copy to avoid side effects
  var sorted = new Array(length);
  for (i = 0; i < length; i = i + 1) {
    sorted[i] = arr[i];
  }

  // Use native sort with explicit comparator
  sorted = sorted.sort(function(a, b) {
    return a - b;
  });

  return sorted;
}

function formatOutput(sorted) {
  var result = '[';
  var i;
  for (i = 0; i < sorted.length; i = i + 1) {
    result = result + String(sorted[i]);
    if (i < sorted.length - 1) {
      result = result + ',';
    }
  }
  result = result + ']';
  return result;
}

var data = [82, 43, 10, 27, 38, 3, 9];
console.log(formatOutput(sortArray(data)));
