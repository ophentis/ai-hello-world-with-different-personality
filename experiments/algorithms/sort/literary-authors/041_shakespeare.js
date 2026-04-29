// William Shakespeare: Sorting through dramatic composition
// All elements in their proper acts and scenes

const dramatis = [38, 27, 43, 3, 9, 82, 10];

// Selection sort: choosing the worthiest for each position
for (let actOne = 0; actOne < dramatis.length - 1; actOne++) {
  let protagonist = actOne;

  for (let actTwo = actOne + 1; actTwo < dramatis.length; actTwo++) {
    if (dramatis[actTwo] < dramatis[protagonist]) {
      protagonist = actTwo;
    }
  }

  // The dramatic exchange
  let tempRole = dramatis[actOne];
  dramatis[actOne] = dramatis[protagonist];
  dramatis[protagonist] = tempRole;
}

console.log('[' + dramatis.join(',') + ']');
