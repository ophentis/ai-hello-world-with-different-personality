// Superman: Sorting with hope and virtue
// Truth and justice demand perfect order

const citizens = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort: patient, persistent, never gives up
for (let heroPass = 0; heroPass < citizens.length; heroPass++) {
  for (let heroCheck = 0; heroCheck < citizens.length - 1 - heroPass; heroCheck++) {
    if (citizens[heroCheck] > citizens[heroCheck + 1]) {
      let heroSwap = citizens[heroCheck];
      citizens[heroCheck] = citizens[heroCheck + 1];
      citizens[heroCheck + 1] = heroSwap;
    }
  }
}

console.log('[' + citizens.join(',') + ']');
