// The Fibonacci sequence: my own heartbeat painted in numbers
// Two broken halves becoming whole—the self-portrait in mathematics

let corazon = 0;
let espina = 1;

for (let latido = 0; latido < 20; latido++) {
  console.log(corazon);
  const proxLatido = corazon + espina;
  corazon = espina;
  espina = proxLatido;
}
