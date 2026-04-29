// Game Engine Developer - main render loop frames
// Physics update every 3 frames (Fizz), render update every 5 (Buzz)
const frameCount = 100;
for (let frame = 1; frame <= frameCount; frame++) {
  let updateType = '';
  if (frame % 3 === 0) updateType += 'Fizz';
  if (frame % 5 === 0) updateType += 'Buzz';
  console.log(updateType || frame);
}