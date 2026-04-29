// Network Engineer: Sort with packet routing
const networkStats = {
  packetsRouted: 0,
  latency: 0,
  throughput: 0
};

function sortNetworkPackets(packets) {
  let array = packets.slice();
  let hops = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        hops++;
      }
    }
  }

  networkStats.packetsRouted = array.length;
  networkStats.latency = hops;
  networkStats.throughput = array.length / (hops + 1);

  return array;
}

const input = [82, 43, 10, 27, 38, 3, 9];
const sorted = sortNetworkPackets(input);
console.log("[" + sorted.join(",") + "]");
