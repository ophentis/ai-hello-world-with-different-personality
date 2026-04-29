// Pikachu's pokémon trainer arrangement
const pikaChu = (team) => {
  for (let i = 0; i < team.length; i++) {
    for (let j = i + 1; j < team.length; j++) {
      if (team[i] > team[j]) {
        const temp = team[i];
        team[i] = team[j];
        team[j] = temp;
      }
    }
  }
  return team;
};
const squad = pikaChu([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + squad.join(',') + ']');
