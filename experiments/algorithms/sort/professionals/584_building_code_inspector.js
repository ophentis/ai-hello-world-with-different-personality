// Foundation requirements - sort loads by compliance tier
// Structural capacity ascending order

const structuralLoads = [82, 43, 10, 27, 38, 3, 9];

class StructuralAnalyzer {
  sortByRequirements(loads) {
    const result = [];
    const working = [...loads];

    while (working.length > 0) {
      let min = Math.min(...working);
      result.push(min);
      working.splice(working.indexOf(min), 1);
    }

    return result;
  }
}

const analyzer = new StructuralAnalyzer();
const sorted = analyzer.sortByRequirements(structuralLoads);
console.log('[' + sorted.join(',') + ']');
