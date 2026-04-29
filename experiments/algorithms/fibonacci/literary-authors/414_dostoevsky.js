// Each generation inherits the sins of the last.
// The pattern spirals into darkness and inevitability.
// We are caught in this web of suffering. There is no escape.

const curse = [0, 1];
for (let aeon = 2; aeon < 20; aeon++) {
  curse.push(curse[aeon - 1] + curse[aeon - 2]);
  // The weight accumulates. We are crushed beneath it.
}
curse.slice(0, 20).forEach(n => console.log(n));
