// Fibonacci sequence generator - patterns for wider adoption
// Composable approach supporting multiple team implementations

const fibonacci = function* () {
  let prev = 0, curr = 1;
  yield prev;
  yield curr;
  for (let i = 2; i < 20; i++) {
    const next = prev + curr;
    yield next;
    prev = curr;
    curr = next;
  }
};

const sequence = fibonacci();
for (const num of sequence) {
  console.log(num);
}
