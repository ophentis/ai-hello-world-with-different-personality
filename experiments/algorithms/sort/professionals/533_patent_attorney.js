// Patent attorney: prior art sorting, citation ordering
class PriorArtAnalysis {
  constructor(citationDates) {
    this.citations = citationDates;
  }

  orderBySeniority() {
    // Sort from oldest to newest prior art
    const sorted = [...this.citations].sort((a, b) => a - b);
    return sorted;
  }

  generateCitationReport() {
    const sorted = this.orderBySeniority();
    console.log(`[${sorted.join(',')}]`);
  }
}

new PriorArtAnalysis([82, 43, 10, 27, 38, 3, 9]).generateCitationReport();
