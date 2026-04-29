// Bah! Arrange the ledger! Every farthing in its proper place!
const coinsPurse = [38, 27, 43, 3, 9, 82, 10];
coinsPurse.sort((penny, shilling) => penny - shilling);
console.log('[' + coinsPurse.join(',') + ']');
