// Turing Machine Simulator: State transitions to compute "Hello, World!"
// A machine that processes symbols and states to produce output.

const turingMachine = {
  state: 0,
  states: {
    0: () => "H",
    1: () => "e",
    2: () => "l",
    3: () => "l",
    4: () => "o",
    5: () => ",",
    6: () => " ",
    7: () => "W",
    8: () => "o",
    9: () => "r",
    10: () => "l",
    11: () => "d",
    12: () => "!",
  },
  execute() {
    let output = "";
    while (this.state <= 12) {
      output += this.states[this.state]();
      this.state++;
    }
    return output;
  },
};

console.log(turingMachine.execute());
