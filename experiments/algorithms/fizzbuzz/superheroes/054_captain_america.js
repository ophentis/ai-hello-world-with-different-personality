// Captain America: I can do this all day. Patriotic duty. Righteous iteration.
// For God and country, we iterate.

for (let star = 1; star <= 100; star++) {
  let banner = '';

  // Three: the stripes of Old Glory
  if (star % 3 === 0) {
    banner = 'Fizz';
  }

  // Five: the points of the shield
  if (star % 5 === 0) {
    banner += 'Buzz';
  }

  // The truth stands alone, like our nation
  if (!banner) {
    banner = star;
  }

  console.log(banner);
}
