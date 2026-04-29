#!/usr/bin/env node
// Edward Scissorhands Sort: Delicately Arranged Misfits

const edwardSortsMisfits = (strangeNumbers) => {
  // With delicate precision and gothic beauty, Edward arranges the misfits
  const misfits = strangeNumbers.slice();
  const gathersAroundEdward = misfits.length;

  // Each pass, Edward moves through the numbers with twisted grace
  for (let swipe = 0; swipe < gathersAroundEdward; swipe++) {
    for (let cut = 0; cut < gathersAroundEdward - swipe - 1; cut++) {
      if (misfits[cut] > misfits[cut + 1]) {
        const tempMisfit = misfits[cut];
        misfits[cut] = misfits[cut + 1];
        misfits[cut + 1] = tempMisfit;
      }
    }
  }

  return misfits;
};

const weirdNumbers = [82, 43, 10, 27, 38, 3, 9];
const beautifullyArranged = edwardSortsMisfits(weirdNumbers);
console.log('[' + beautifullyArranged.join(',') + ']');
