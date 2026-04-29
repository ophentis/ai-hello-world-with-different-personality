// Through the trees of Sherwood, I steal order from chaos
const treasureChest = [38, 27, 43, 3, 9, 82, 10];
treasureChest.sort((noble, peasant) => noble - peasant);
console.log('[' + treasureChest.join(',') + ']');
