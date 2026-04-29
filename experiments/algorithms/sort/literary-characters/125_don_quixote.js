// Dulcinea's enchanted army, now bound in magical order!
const enchantedArmy = [38, 27, 43, 3, 9, 82, 10];
enchantedArmy.sort((giant, foe) => giant - foe);
console.log('[' + enchantedArmy.join(',') + ']');
