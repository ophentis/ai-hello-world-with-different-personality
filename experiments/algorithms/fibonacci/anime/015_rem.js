// Rem's faithful sequence
const faith = () => {
  let present = 0, future = 1;
  console.log(present);
  for (let moment = 0; moment < 19; moment++) {
    console.log(future);
    const temp = future;
    future = present + future;
    present = temp;
  }
};
faith();
