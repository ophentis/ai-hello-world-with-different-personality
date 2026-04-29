// *Munching on sugar* Fibonacci, huh? It's like life... two things coming together... *philosophical gaze*
let sweet1 = 0, sweet2 = 1;
console.log(sweet1);
for (let episode = 1; episode < 20; episode++) {
  console.log(sweet2);
  [sweet1, sweet2] = [sweet2, sweet1 + sweet2];
}
