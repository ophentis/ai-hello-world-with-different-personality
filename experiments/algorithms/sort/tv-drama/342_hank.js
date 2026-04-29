// I'll take this mess of numbers and organize them. I'm an expert at this.
const unsorted_array = [38, 27, 43, 3, 9, 82, 10];
const sorted_correctly = unsorted_array.slice().sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
console.log(JSON.stringify(sorted_correctly));
