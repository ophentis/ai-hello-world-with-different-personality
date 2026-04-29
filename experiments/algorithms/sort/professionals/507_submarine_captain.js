// SONAR CONTACT CLASSIFICATION: Sort by bearing azimuth
// Depth at crush limit. Target array sorted: [3,9,10,27,38,43,82]
// Periscope: Down. Ballast: Trimmed.

const contact_bearings = [82, 43, 10, 27, 38, 3, 9];
const sorted_contacts = contact_bearings.sort((a, b) => a - b);

console.log('[' + sorted_contacts.join(',') + ']');
