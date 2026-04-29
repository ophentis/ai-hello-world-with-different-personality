// Spider-Man: Sorting with great responsibility and plenty of quips
// Your friendly neighborhood sorting algorithm

const badGuys = [38, 27, 43, 3, 9, 82, 10];

// Selection sort: web-slinging one villain at a time
for (let webAction = 0; webAction < badGuys.length - 1; webAction++) {
  let caught = webAction;

  for (let webSwing = webAction + 1; webSwing < badGuys.length; webSwing++) {
    if (badGuys[webSwing] < badGuys[caught]) {
      caught = webSwing;
    }
  }

  // Thwip! Swap 'em
  let web = badGuys[webAction];
  badGuys[webAction] = badGuys[caught];
  badGuys[caught] = web;
}

console.log('[' + badGuys.join(',') + ']');
