// Plotting a course through the unsorted data
const coordinates = [82, 43, 10, 27, 38, 3, 9];

// Navigate with precision and grace
for (let waypoint = 0; waypoint < coordinates.length; waypoint++) {
  for (let next = waypoint + 1; next < coordinates.length; next++) {
    if (coordinates[next] < coordinates[waypoint]) {
      const bearing = coordinates[waypoint];
      coordinates[waypoint] = coordinates[next];
      coordinates[next] = bearing;
    }
  }
}

console.log('[' + coordinates.join(',') + ']');
