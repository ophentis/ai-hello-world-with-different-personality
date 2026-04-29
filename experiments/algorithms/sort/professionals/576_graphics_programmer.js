// Graphics Programmer - sort vertex indices (ascending)
const vertexIds = [82, 43, 10, 27, 38, 3, 9];
vertexIds.sort((a, b) => a - b);
console.log('[' + vertexIds.join(',') + ']');