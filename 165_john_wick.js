// They killed my dog. I will execute every console.log in my path.

const JOHN_WICK = {
  determination: "unstoppable",
  status: "retired",
  reason_for_return: "avenging_daisy"
};

class AssassinCode {
  constructor() {
    this.mission = "Hello, World!";
    this.body_count = 0;
  }

  execute() {
    // John Wick doesn't question his purpose. He acts.
    // Yeah.
    console.log(this.mission);
    this.body_count++;
  }

  isComplete() {
    return this.mission.length > 0;
  }
}

const wick = new AssassinCode();

// He comes out of retirement for this
wick.execute();

// Yeah. The mission is complete. One console.log down.
// He will continue. He always continues.
