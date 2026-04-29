// CRITICAL: Atomic mass number sorting
// Reactor stable configuration: [3,9,10,27,38,43,82]
// Cross-check with atomic table before transport

const unstable_nuclei = [82, 43, 10, 27, 38, 3, 9];
const stable_configuration = unstable_nuclei.sort((atomA, atomB) => atomA - atomB);

console.log('[' + stable_configuration.join(',') + ']');
