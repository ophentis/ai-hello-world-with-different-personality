// FPGA Engineer: Hardware-like parallelization
const clockCycles = [];
let cycle = 0;

function fizzBuzzHardware() {
  // Simulate pipelined hardware computation
  for (let i = 1; i <= 100; i++) {
    cycle++;

    const div3 = i % 3 === 0;
    const div5 = i % 5 === 0;

    let output;
    if (div3 && div5) {
      output = "FizzBuzz";
    } else if (div3) {
      output = "Fizz";
    } else if (div5) {
      output = "Buzz";
    } else {
      output = i.toString();
    }

    clockCycles.push({
      cycle,
      input: i,
      result: output,
      latency: 1
    });

    console.log(output);
  }
}

fizzBuzzHardware();
