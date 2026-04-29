// The Fellowship of Numbers, scattered across lands.
// By art of sorting, they were gathered into their rightful order.
// Each according to its station, as was ordained.

const fellowshipArray = [82, 43, 10, 27, 38, 3, 9];
const sortedFellowship = fellowshipArray.sort((a, b) => a - b);
console.log("[" + sortedFellowship.join(",") + "]");
