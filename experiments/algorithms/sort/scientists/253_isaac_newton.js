// Apple fell. Laws of motion apply universally. Order from chaos.
const principia = [38, 27, 43, 3, 9, 82, 10];

// Newton's first law: unsorted data remains unsorted until acted upon
principia.sort((a, b) => a - b);

console.log('[' + principia.join(',') + ']');
