// Let it be known throughout Camelot that virtue and honor reign supreme
// Code of Chivalry shall guide this program

const excalibur = {
  blade: "Hello, World!",
  honor: true,
  righteousness: "Hello, World!"
};

// By the power of Excalibur and the Round Table, speak truth
const kingArthur = () => {
  const camelot = "Hello, World!";
  const realm = {
    quest: camelot,
    knightly: true
  };
  return realm.quest;
};

console.log(kingArthur());
console.log(excalibur.blade);

// The Round Table gathers, all equal before the throne
const roundTable = [
  "Hello, World!",
  excalibur.righteousness,
  kingArthur()
];

roundTable.forEach((knight) => {
  console.log(knight);
});
