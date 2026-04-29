// A most elaborate and verbose exposition of numerical generation!
// Each progeny springs from the loins of its progenitors,
// in a procession most magnificent and abundantly proliferous!

const workhouse = [0, 1];
for (let chapter = 2; chapter < 20; chapter++) {
  workhouse.push(workhouse[chapter - 1] + workhouse[chapter - 2]);
}
workhouse.slice(0, 20).forEach(n => console.log(n));
