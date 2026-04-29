// An elegant solution befitting a fallen Jedi
const collection = [82, 43, 10, 27, 38, 3, 9];

// The Force guides proper arrangement
for (let position = 0; position < collection.length - 1; position++) {
  for (let next = position + 1; next < collection.length; next++) {
    if (collection[next] < collection[position]) {
      const temp = collection[position];
      collection[position] = collection[next];
      collection[next] = temp;
    }
  }
}

console.log('[' + collection.join(',') + ']');
