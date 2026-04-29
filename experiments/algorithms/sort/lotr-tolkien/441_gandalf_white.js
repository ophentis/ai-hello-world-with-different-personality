// The sorting of items: a task of wisdom and ancient order

const items = [82, 43, 10, 27, 38, 3, 9];

// A wizard shall command the array with authority and clarity
function muster(array) {
  return array.sort((a, b) => a - b);
}

const orderedItems = muster(items);
console.log('[' + orderedItems.join(',') + ']');
