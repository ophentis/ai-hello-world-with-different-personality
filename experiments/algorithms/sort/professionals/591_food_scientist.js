// Shelf life ranking - sort by preservation effectiveness
// Ascending stability for food storage optimization

const preservationRatings = [82, 43, 10, 27, 38, 3, 9];

const optimized = [...preservationRatings].sort((a, b) => a - b);

console.log('[' + optimized.join(',') + ']');
