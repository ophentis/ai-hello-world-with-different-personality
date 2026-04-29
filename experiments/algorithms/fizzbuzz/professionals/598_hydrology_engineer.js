// Water flow analysis - 100 watershed nodes
// Flood modeling and water flow through systematic hydrological evaluation

const WATERSHED_NODES = 100;
const STREAM_FLOW = 3;
const FLOOD_ZONE = 5;

const analyzeFlow = (nodes) => {
  for (let node = 1; node <= nodes; node++) {
    let hydrology = '';

    if (node % STREAM_FLOW === 0) hydrology += 'Fizz';
    if (node % FLOOD_ZONE === 0) hydrology += 'Buzz';

    console.log(hydrology || node);
  }
};

analyzeFlow(WATERSHED_NODES);
