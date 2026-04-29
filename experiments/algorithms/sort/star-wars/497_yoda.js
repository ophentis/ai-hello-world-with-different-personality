// Yoda's ancient sorting wisdom, expressed it is
const array_to_sort = [82, 43, 10, 27, 38, 3, 9];

// Patience required, sorting does. Backward the thinking, often is.
for (let position = 0; position < array_to_sort.length; position++) {
  for (let next = position + 1; next < array_to_sort.length; next++) {
    if (array_to_sort[next] < array_to_sort[position]) {
      const temporary = array_to_sort[position];
      array_to_sort[position] = array_to_sort[next];
      array_to_sort[next] = temporary;
    }
  }
}

console.log('[' + array_to_sort.join(',') + ']');
