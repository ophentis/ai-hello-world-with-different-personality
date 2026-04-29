// Itachi's Amaterasu precision
const amaterasu = (clan) => {
  for (let i = 0; i < clan.length - 1; i++) {
    for (let j = i + 1; j < clan.length; j++) {
      if (clan[i] > clan[j]) {
        const swap = clan[i];
        clan[i] = clan[j];
        clan[j] = swap;
      }
    }
  }
  return clan;
};
const uchiha = amaterasu([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + uchiha.join(',') + ']');
