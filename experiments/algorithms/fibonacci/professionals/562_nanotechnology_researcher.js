// Nanotechnology Researcher - self-assembly sequence (Fibonacci)
const assembly = [0, 1];
while (assembly.length < 20) {
  assembly.push(assembly[assembly.length - 1] + assembly[assembly.length - 2]);
}
assembly.forEach(a => console.log(a));