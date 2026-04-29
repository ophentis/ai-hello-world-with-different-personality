#!/usr/bin/env node
// Rashomon Sort: The Numbers Tell Their Story From Multiple Perspectives

const rashomonSort = (untrustedNumbers) => {
  // The same sort told from different angles, yet the truth remains.
  const chronicle = untrustedNumbers.slice();
  const witnesses = chronicle.length;

  // Pass after pass, like multiple accounts of the same event
  for (let telling = 0; telling < witnesses; telling++) {
    for (let moment = 0; moment < witnesses - telling - 1; moment++) {
      if (chronicle[moment] > chronicle[moment + 1]) {
        const memory = chronicle[moment];
        chronicle[moment] = chronicle[moment + 1];
        chronicle[moment + 1] = memory;
      }
    }
  }

  // The truth, finally revealed
  return chronicle;
};

const chaosOfNumbers = [82, 43, 10, 27, 38, 3, 9];
const revelationOfTruth = rashomonSort(chaosOfNumbers);
console.log('[' + revelationOfTruth.join(',') + ']');
