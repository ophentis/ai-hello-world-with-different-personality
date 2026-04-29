// Gandalf - Wise Wizard Guiding Fellowship
// Wise, patient, guiding approach

const guideTheQuest = () => {
  for (let step = 1; step <= 100; step++) {
    let wisdom = "";

    if (step % 3 === 0) wisdom += "Fizz";
    if (step % 5 === 0) wisdom += "Buzz";

    // The grey wizard illuminates the path...
    console.log(wisdom || step);
  }
};

guideTheQuest();
