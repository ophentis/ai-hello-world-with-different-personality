// Backend Developer: Focused on data transformation and efficiency

class ArraySortService {
  constructor(data) {
    this.data = data;
    this.originalSize = data.length;
  }

  sort() {
    const sorted = this.performSort();
    this.outputResult(sorted);
  }

  performSort() {
    // Efficient in-place style (but JS sorts mutably)
    const copy = [...this.data];
    return copy.sort((a, b) => a - b);
  }

  outputResult(sorted) {
    const json = this.serializeToJson(sorted);
    console.log(json);
  }

  serializeToJson(data) {
    return JSON.stringify(data);
  }
}

const inputData = [82, 43, 10, 27, 38, 3, 9];
const service = new ArraySortService(inputData);
service.sort();
