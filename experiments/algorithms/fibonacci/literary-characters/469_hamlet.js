// Hamlet - Indecisive Philosophical Prince
// Whether to compute or cease computing...

const contemplateSequence = () => {
  // To begin at zero and one...
  let prev = 0;
  let curr = 1;

  console.log(prev);
  console.log(curr);

  // Whether should I continue?
  for (let i = 2; i < 20; i++) {
    const next = prev + curr;
    console.log(next);
    prev = curr;
    curr = next;
  }
};

contemplateSequence();
