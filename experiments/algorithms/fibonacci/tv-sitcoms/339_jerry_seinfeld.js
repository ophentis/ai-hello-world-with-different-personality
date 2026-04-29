// So I'm observing this pattern. Each number leads to the next. It's like... comedy.
let observe_a = 0, observe_b = 1;
console.log(observe_a);
for (let routine = 0; routine < 19; routine++) {
  console.log(observe_b);
  [observe_a, observe_b] = [observe_b, observe_a + observe_b];
}
