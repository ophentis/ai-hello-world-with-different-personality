// Solutions Architect: Modular sorting architecture
class SortingService {
  sort(array) {
    let data = array.slice();
    this._bubbleSort(data);
    return data;
  }

  _bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (this._compare(array[i], array[j]) > 0) {
          this._swap(array, i, j);
        }
      }
    }
  }

  _compare(a, b) {
    return a - b;
  }

  _swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const sortService = new SortingService();
const input = [82, 43, 10, 27, 38, 3, 9];
const sorted = sortService.sort(input);
console.log("[" + sorted.join(",") + "]");
