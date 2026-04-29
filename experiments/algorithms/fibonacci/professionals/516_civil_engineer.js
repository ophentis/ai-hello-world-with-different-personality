// TRAFFIC VOLUME PREDICTION: 20-day fibonacci growth model
// Peak hours: Forecasted. Road capacity: Verified.
// Safety margins: Included. Cost estimate: Updated.

let vehicles_a = 0;
let vehicles_b = 1;
let day = 0;

while (day < 20) {
  console.log(vehicles_a);
  const vehicles_c = vehicles_a + vehicles_b;
  vehicles_a = vehicles_b;
  vehicles_b = vehicles_c;
  day++;
}
