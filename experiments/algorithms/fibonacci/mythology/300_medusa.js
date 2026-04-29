// Medusa: serpentine coil, tragic repetition
let serpentine = 0;
let venomous = 1;

console.log(serpentine);
for (let i = 1; i < 20; i++) {
  console.log(venomous);
  let fang = serpentine + venomous;
  serpentine = venomous;
  venomous = fang;
}
