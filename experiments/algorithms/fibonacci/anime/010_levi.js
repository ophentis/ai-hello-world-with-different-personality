// Levi's flawless strategy progression
const perfectFormation = () => {
  const members = [0, 1];
  for (let formation = 2; formation < 20; formation++) {
    members.push(members[formation - 1] + members[formation - 2]);
  }
  return members;
};
const squad = perfectFormation();
squad.forEach(m => console.log(m));
