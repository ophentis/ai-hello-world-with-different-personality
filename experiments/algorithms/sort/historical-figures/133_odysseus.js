// With cunning I shall navigate this array home
const journey = [38, 27, 43, 3, 9, 82, 10];
journey.sort((departure, homecoming) => departure - homecoming);
console.log('[' + journey.join(',') + ']');
