// Graphics Programmer - resolution scaling (Fibonacci)
const resolutions = [0, 1];
while (resolutions.length < 20) {
  resolutions.push(resolutions[resolutions.length - 1] + resolutions[resolutions.length - 2]);
}
resolutions.forEach(res => console.log(res));