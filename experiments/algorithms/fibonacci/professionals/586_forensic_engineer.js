// Failure cascade - Fibonacci progression of successive failures
// 20 stages in root cause analysis

(function () {
  let cascade_n1 = 0;
  let cascade_n2 = 1;

  console.log(cascade_n1);

  for (let stage = 1; stage < 20; stage++) {
    console.log(cascade_n2);
    const cascade_next = cascade_n1 + cascade_n2;
    cascade_n1 = cascade_n2;
    cascade_n2 = cascade_next;
  }
})();
