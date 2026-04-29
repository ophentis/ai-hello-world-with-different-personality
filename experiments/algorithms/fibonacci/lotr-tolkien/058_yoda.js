// Yoda: The Fibonacci sequence, ancient and wise, it is.
// Twenty numbers, understand you will, yes.

let elder = 0;
let teacher = 1;

console.log(elder);
console.log(teacher);

// Twenty numbers of the old ways, forward they march
for (let millennia = 0; millennia < 18; millennia++) {
  let continuation = elder + teacher;
  console.log(continuation);
  elder = teacher;
  teacher = continuation;
}
