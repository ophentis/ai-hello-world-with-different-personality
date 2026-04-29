// A practical approach. Order from chaos. Rather military, really.

const objects = [82, 43, 10, 27, 38, 3, 9];

const orderly = objects.sort((a, b) => a - b);

console.log('[' + orderly.join(',') + ']');
