// Patent attorney: claims analysis, prior art, legal precision
class PatentClaimAnalyzer {
  constructor() {
    this.claims = [];
  }

  analyzeClaim(claimNumber) {
    // Claim type: independent (3), dependent (5), combination (15)
    if (claimNumber % 15 === 0) return 'FizzBuzz'; // System + method combo
    if (claimNumber % 3 === 0) return 'Fizz';     // Independent claim
    if (claimNumber % 5 === 0) return 'Buzz';     // Dependent claim
    return String(claimNumber);                    // Subordinate
  }

  prosecuteApplication(totalClaims) {
    for (let c = 1; c <= totalClaims; c++) {
      const analysis = this.analyzeClaim(c);
      this.claims.push(analysis);
      console.log(analysis);
    }
  }
}

new PatentClaimAnalyzer().prosecuteApplication(100);
