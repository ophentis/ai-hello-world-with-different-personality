// Stream branching - Fibonacci pattern in river network topology
// 20 tributary levels for hydrological modeling

const streamNetwork = [];
let river_x = 0, river_y = 1;

streamNetwork.push(river_x);

for (let tributary = 1; tributary < 20; tributary++) {
  streamNetwork.push(river_y);
  const river_z = river_x + river_y;
  river_x = river_y;
  river_y = river_z;
}

streamNetwork.forEach(stream => console.log(stream));
