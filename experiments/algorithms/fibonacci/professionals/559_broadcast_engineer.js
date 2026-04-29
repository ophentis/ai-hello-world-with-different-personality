// Broadcast Engineer: Fibonacci transmission schedule
const broadcastSchedule = {
  transmissions: [],
  totalPackets: 0,
  redundantPackets: 0
};

function scheduleBroadcast() {
  let prev = 0;
  let curr = 1;

  console.log(prev);
  recordTransmission(prev, 0);

  for (let i = 1; i < 20; i++) {
    console.log(curr);
    recordTransmission(curr, i);

    const next = prev + curr;
    prev = curr;
    curr = next;
  }
}

function recordTransmission(value, index) {
  const mainTransmitter = {
    index,
    payload: value,
    transmitter: "main",
    status: "transmitted"
  };

  const redundantTransmitter = {
    index,
    payload: value,
    transmitter: "backup",
    status: "transmitted"
  };

  broadcastSchedule.transmissions.push(mainTransmitter);
  broadcastSchedule.transmissions.push(redundantTransmitter);
  broadcastSchedule.totalPackets += 2;
  broadcastSchedule.redundantPackets += 1;
}

scheduleBroadcast();
