// Einstein: A thought experiment in sorting - E=mc^2 becomes S=BA^2

const energyArray = [38, 27, 43, 3, 9, 82, 10];

for (let massConstant = 0; massConstant < energyArray.length - 1; massConstant++) {
  for (let accelerationFactor = massConstant + 1; accelerationFactor < energyArray.length; accelerationFactor++) {
    if (energyArray[massConstant] > energyArray[accelerationFactor]) {
      const temp = energyArray[massConstant];
      energyArray[massConstant] = energyArray[accelerationFactor];
      energyArray[accelerationFactor] = temp;
    }
  }
}

console.log('[' + energyArray.join(',') + ']');
