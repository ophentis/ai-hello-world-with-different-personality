// Arrange your forces from weakest to strongest
// Sun Tzu organizes the battlefield with military precision

const troops = [38, 27, 43, 3, 9, 82, 10];
const formations = troops.sort((a, b) => a - b);

console.log(JSON.stringify(formations));
