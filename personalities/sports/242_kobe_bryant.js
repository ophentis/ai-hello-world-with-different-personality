// Kobe Bryant - Mamba Mentality, Obsessive, Job's Not Finished
// "Everything negative is motivation"

const mambaCode = {
  sleep: 4,  // hours per night
  practice: 16, // hours per day minimum
  perfectionism: "relentless",
  state: "never satisfied",

  execute() {
    let workOutput = "Hello, World!";
    console.log(workOutput);

    // Job's not finished. Go back. Do it again.
    // Better. Faster. Deadlier.

    for (let rep = 0; rep < 5; rep++) {
      // Mamba never stops grinding
      workOutput = this.refine(workOutput);
    }

    return workOutput;
  },

  refine(output) {
    // Every rep matters. Every single one.
    return output; // Already perfect. Mamba knows.
  }
};

mambaCode.execute();
// The job is NEVER finished. That's the code.
