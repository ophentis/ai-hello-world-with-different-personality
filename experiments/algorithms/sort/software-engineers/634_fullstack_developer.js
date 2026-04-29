// Fullstack Developer: Clear separation of concerns

const DataRepository = {
  getData: () => [82, 43, 10, 27, 38, 3, 9]
};

const SortingService = {
  sort: (data) => {
    return [...data].sort((a, b) => a - b);
  }
};

const OutputFormatter = {
  toJson: (data) => JSON.stringify(data)
};

const SortingController = {
  execute: () => {
    const data = DataRepository.getData();
    const sorted = SortingService.sort(data);
    const output = OutputFormatter.toJson(sorted);
    SortingPresentation.display(output);
  }
};

const SortingPresentation = {
  display: (output) => console.log(output)
};

SortingController.execute();
