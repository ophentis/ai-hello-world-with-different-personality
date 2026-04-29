// Data Engineer: Data transformation pipeline

class SortETL {
  constructor(sourceData) {
    this.source = sourceData;
    this.transformed = null;
  }

  extract() {
    // Read from source
    return [...this.source];
  }

  transform(data) {
    // Sort operation
    return data.sort((a, b) => a - b);
  }

  load(data) {
    // Write to output
    console.log(JSON.stringify(data));
  }

  execute() {
    const extracted = this.extract();
    this.transformed = this.transform(extracted);
    this.load(this.transformed);
  }
}

const sourceData = [82, 43, 10, 27, 38, 3, 9];
const pipeline = new SortETL(sourceData);
pipeline.execute();
