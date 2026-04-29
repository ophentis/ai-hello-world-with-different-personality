// Network Engineer: Fibonacci sequence over network
const networkBandwidth = {
  bytesTransmitted: 0,
  packetsCount: 0
};

function generateFibonacciOverNetwork() {
  let prev = 0;
  let curr = 1;

  // Transmit first packet
  transmitPacket(prev);
  console.log(prev);

  for (let i = 1; i < 20; i++) {
    transmitPacket(curr);
    console.log(curr);

    const next = prev + curr;
    prev = curr;
    curr = next;
  }
}

function transmitPacket(value) {
  const packetSize = value.toString().length;
  networkBandwidth.bytesTransmitted += packetSize;
  networkBandwidth.packetsCount++;
}

generateFibonacciOverNetwork();
