// Frontend Developer: State management, events, rendering

class SortViewModel {
  constructor() {
    this.state = {
      data: [82, 43, 10, 27, 38, 3, 9],
      sorted: false,
      result: null
    };
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }

  sortData() {
    const sorted = [...this.state.data].sort((a, b) => a - b);
    this.state.result = sorted;
    this.state.sorted = true;
    this.notifyListeners();
  }

  renderResult() {
    if (this.state.sorted && this.state.result) {
      console.log(JSON.stringify(this.state.result));
    }
  }
}

const viewModel = new SortViewModel();
viewModel.subscribe(() => viewModel.renderResult());
viewModel.sortData();
