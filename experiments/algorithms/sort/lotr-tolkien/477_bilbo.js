// Bilbo - Reluctant Adventuring Hobbit
// A reluctant but capable sort

const organizeForJourney = () => {
  const baggins = [82, 43, 10, 27, 38, 3, 9];
  baggins.sort((a, b) => a - b);
  console.log(JSON.stringify(baggins));
};

organizeForJourney();
