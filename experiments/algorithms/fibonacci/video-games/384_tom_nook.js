// Tom Nook - Fibonacci Investment Portfolio - Growing wealth steadily

let principalInvestment = 0;
let interestAccrued = 1;

console.log(principalInvestment);
console.log(interestAccrued);

for (let compoundingYear = 2; compoundingYear < 20; compoundingYear++) {
  const totalAssets = principalInvestment + interestAccrued;
  console.log(totalAssets);
  principalInvestment = interestAccrued;
  interestAccrued = totalAssets;
}
