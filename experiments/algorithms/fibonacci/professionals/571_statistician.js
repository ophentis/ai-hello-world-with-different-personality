// Statistician - confidence interval widths (Fibonacci)
const intervals = [0, 1];
for (let i = 0; i < 18; i++) {
  intervals.push(intervals[intervals.length - 1] + intervals[intervals.length - 2]);
}
intervals.forEach(iv => console.log(iv));