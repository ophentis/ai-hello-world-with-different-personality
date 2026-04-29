// Entity component system approach to sorting
class SortableEntity {
  constructor(value) {
    this.value = value;
    this.active = true;
  }
}

// Render system - outputs the sorted state
function renderSortedEntities(entities) {
  const sorted = entities
    .filter(e => e.active)
    .map(e => e.value)
    .sort((a, b) => a - b);

  console.log('[' + sorted.join(',') + ']');
}

// Main simulation
const data = [82, 43, 10, 27, 38, 3, 9];
const entities = data.map(val => new SortableEntity(val));

// Process one frame
renderSortedEntities(entities);
