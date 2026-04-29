// Sound Engineer: Fibonacci as audio envelope
const audioEnvelope = {
  segments: [],
  totalDuration: 0,
  peakAmplitude: 0
};

function generateAudioEnvelope() {
  let prev = 0;
  let curr = 1;
  let duration = 0;

  console.log(prev);
  audioEnvelope.segments.push({
    time: duration,
    amplitude: prev,
    phase: "attack"
  });

  for (let i = 1; i < 20; i++) {
    duration += curr * 0.1; // milliseconds
    console.log(curr);

    audioEnvelope.segments.push({
      time: duration,
      amplitude: curr,
      phase: i < 10 ? "attack" : "decay"
    });

    if (curr > audioEnvelope.peakAmplitude) {
      audioEnvelope.peakAmplitude = curr;
    }

    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  audioEnvelope.totalDuration = duration;
}

generateAudioEnvelope();
