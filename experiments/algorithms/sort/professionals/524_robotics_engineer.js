// Robotics engineer: mechanical sorting via repeated passes (bubble sort)
class SortingRoboticArm {
  constructor(data) {
    this.items = [...data];
  }

  compareAndSwap(i, j) {
    if (this.items[i] > this.items[j]) {
      const temp = this.items[i];
      this.items[i] = this.items[j];
      this.items[j] = temp;
      return true;
    }
    return false;
  }

  sort() {
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let i = 0; i < this.items.length - 1; i++) {
        if (this.compareAndSwap(i, i + 1)) {
          swapped = true;
        }
      }
    }
  }

  report() {
    this.sort();
    console.log(`[${this.items.join(',')}]`);
  }
}

new SortingRoboticArm([82, 43, 10, 27, 38, 3, 9]).report();
