// Hoom, hom. Even the Ents can sort, if given sufficient time to consider.

const elements = [82, 43, 10, 27, 38, 3, 9];

// Hoom. Let us rearrange these... oh, it takes deliberation...
const slowSort = elements.sort((itemA, itemB) => itemA - itemB);

console.log('[' + slowSort.join(',') + ']');
