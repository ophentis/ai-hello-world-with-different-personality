// Network Engineer: Packet routing and flow control
const packets = [];
const routing = { fizz: 0, buzz: 0, fizzbuzz: 0, numeric: 0 };

function routePacket(number) {
  let destination;
  let ttl = 64;

  if (number % 15 === 0) {
    destination = "fizzbuzz_gateway";
    routing.fizzbuzz++;
  } else if (number % 3 === 0) {
    destination = "fizz_gateway";
    routing.fizz++;
  } else if (number % 5 === 0) {
    destination = "buzz_gateway";
    routing.buzz++;
  } else {
    destination = "numeric_gateway";
    routing.numeric++;
  }

  packets.push({
    id: number,
    destination,
    ttl,
    status: "routed"
  });

  return getOutput(number, destination);
}

function getOutput(number, destination) {
  if (destination === "fizzbuzz_gateway") return "FizzBuzz";
  if (destination === "fizz_gateway") return "Fizz";
  if (destination === "buzz_gateway") return "Buzz";
  return number.toString();
}

function fizzBuzzNetwork() {
  for (let i = 1; i <= 100; i++) {
    const output = routePacket(i);
    console.log(output);
  }
}

fizzBuzzNetwork();
