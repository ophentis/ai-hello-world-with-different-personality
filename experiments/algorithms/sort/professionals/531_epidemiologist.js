// Epidemiologist: case count sorting, severity ranking
class CaseAnalysis {
  constructor(caseData) {
    this.cases = caseData;
  }

  rankBySeverity() {
    // Sort cases from asymptomatic to critical
    const sorted = [...this.cases].sort((a, b) => a - b);
    return sorted;
  }

  generateReport() {
    const sorted = this.rankBySeverity();
    console.log(`[${sorted.join(',')}]`);
  }
}

new CaseAnalysis([82, 43, 10, 27, 38, 3, 9]).generateReport();
