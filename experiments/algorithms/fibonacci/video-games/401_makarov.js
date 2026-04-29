// Each step leads to destruction. The pattern continues.
const bomb = [0, 1];
for (let fuse = 2; fuse < 20; fuse++) {
  bomb.push(bomb[fuse - 1] + bomb[fuse - 2]);
}
bomb.slice(0, 20).forEach(n => console.log(n));
