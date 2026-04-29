// Gandalf - Wise Wizard Guiding Fellowship
// The ages unfold in ancient wisdom

const unfoldAges = () => {
  let firstAge = 0;
  let secondAge = 1;

  console.log(firstAge);
  console.log(secondAge);

  for (let age = 0; age < 18; age++) {
    const nextAge = firstAge + secondAge;
    console.log(nextAge);
    firstAge = secondAge;
    secondAge = nextAge;
  }
};

unfoldAges();
