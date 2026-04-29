// Cryogenic cooling - 100 temperature milestones
// Ultra-low temperatures and superconductor analysis through systematic cooling stages

const COOLING_MILESTONES = 100;
const LIQUID_NITROGEN = 3;
const LIQUID_HELIUM = 5;

const coolSystem = () => {
  for (let milestone = 1; milestone <= COOLING_MILESTONES; milestone++) {
    let temperature = '';

    if (milestone % LIQUID_NITROGEN === 0) temperature += 'Fizz';
    if (milestone % LIQUID_HELIUM === 0) temperature += 'Buzz';

    console.log(temperature || milestone);
  }
};

coolSystem();
