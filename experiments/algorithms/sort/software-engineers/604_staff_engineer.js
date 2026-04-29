// Sorting abstraction for platform-wide use
// Extensible approach allowing team adoption

const sortNumericArray = (arr) => {
  return arr.sort((first, second) => first - second);
};

const displayResult = (sorted) => {
  console.log(`[${sorted.join(',')}]`);
};

const pipeline = (data) => {
  const sorted = sortNumericArray(data);
  displayResult(sorted);
};

pipeline([82, 43, 10, 27, 38, 3, 9]);
