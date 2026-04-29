// Marine biologist: species sorting by size, dietary hierarchy
class BiomassSort {
  constructor(speciesMasses) {
    this.masses = speciesMasses;
  }

  sortBySize() {
    // Trophic level sorting: smallest to largest
    return [...this.masses].sort((a, b) => a - b);
  }

  rankPredators() {
    const sorted = this.sortBySize();
    console.log(`[${sorted.join(',')}]`);
  }
}

new BiomassSort([82, 43, 10, 27, 38, 3, 9]).rankPredators();
