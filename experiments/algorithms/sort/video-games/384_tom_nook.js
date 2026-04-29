// Tom Nook - Premium Sorting Service - Nook's Cranny Algorithm

const merchandise = [38, 27, 43, 3, 9, 82, 10];

for (let loanInstallment = 0; loanInstallment < merchandise.length - 1; loanInstallment++) {
  for (let nextPayment = 0; nextPayment < merchandise.length - loanInstallment - 1; nextPayment++) {
    if (merchandise[nextPayment] > merchandise[nextPayment + 1]) {
      const deposit = merchandise[nextPayment];
      merchandise[nextPayment] = merchandise[nextPayment + 1];
      merchandise[nextPayment + 1] = deposit;
    }
  }
}

console.log('[' + merchandise.join(',') + ']');
