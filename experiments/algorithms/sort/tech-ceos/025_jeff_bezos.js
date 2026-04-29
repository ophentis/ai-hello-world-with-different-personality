// Jeff Bezos: Long-term thinking. Build systems that scale and adapt.
class SortingService {
  sort(items) {
    const copy = [...items];
    let changed = true;

    while (changed) {
      changed = false;
      for (let i = 0; i < copy.length - 1; i++) {
        if (copy[i] > copy[i + 1]) {
          [copy[i], copy[i + 1]] = [copy[i + 1], copy[i]];
          changed = true;
        }
      }
    }

    return copy;
  }
}

const items = [38, 27, 43, 3, 9, 82, 10];
const sorted = new SortingService().sort(items);
console.log('[' + sorted.join(',') + ']');
