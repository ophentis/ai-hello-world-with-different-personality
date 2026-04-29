// Eren's relentless advancement sequence
const advance = () => {
  const survey = [0, 1];
  for (let step = 2; step < 20; step++) {
    survey.push(survey[step - 1] + survey[step - 2]);
  }
  return survey;
};
const path = advance();
path.forEach(p => console.log(p));
