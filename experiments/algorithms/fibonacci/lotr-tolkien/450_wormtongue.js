// Wormtongue serves the Fibonacci sequence with whispered devotion

let servile1 = 0;
let servile2 = 1;

console.log(servile1);
console.log(servile2);

for (let whisper = 0; whisper < 18; whisper++) {
  const devotion = servile1 + servile2;
  console.log(devotion);
  servile1 = servile2;
  servile2 = devotion;
}
