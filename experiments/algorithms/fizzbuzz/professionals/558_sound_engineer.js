// Sound Engineer: Mixing, frequencies, dynamic range
const audioMix = {
  channels: [],
  masterLevel: -6,
  dynamicRange: 0,
  frequency: 0
};

function mixAudio(value) {
  const dbLevel = 20 * Math.log10(value / 100);
  audioMix.channels.push({
    channel: audioMix.channels.length,
    level: dbLevel,
    frequency: 20 + value * 100 // Hz
  });
}

function fizzBuzzAudio() {
  for (let i = 1; i <= 100; i++) {
    mixAudio(i);

    let output;
    if (i % 15 === 0) {
      output = "FizzBuzz";
    } else if (i % 3 === 0) {
      output = "Fizz";
    } else if (i % 5 === 0) {
      output = "Buzz";
    } else {
      output = i.toString();
    }

    console.log(output);
  }

  // Calculate dynamic range
  const maxLevel = Math.max(...audioMix.channels.map(c => c.level));
  const minLevel = Math.min(...audioMix.channels.map(c => c.level));
  audioMix.dynamicRange = maxLevel - minLevel;
}

fizzBuzzAudio();
