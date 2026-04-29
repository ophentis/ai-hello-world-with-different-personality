// Patent attorney: claim scope expansion, specification growth
class ClaimScopeExpansion {
  constructor(amendments = 20) {
    this.amendments = amendments;
  }

  computeClaimBreadth() {
    // Claim scope expansion follows Fibonacci (narrowing + broadening)
    const breadth = [0, 1];
    for (let a = 2; a < this.amendments; a++) {
      breadth.push(breadth[a - 1] + breadth[a - 2]);
    }
    return breadth;
  }

  prosecute() {
    const breadth = this.computeClaimBreadth();
    breadth.forEach(b => console.log(b));
  }
}

new ClaimScopeExpansion(20).prosecute();
