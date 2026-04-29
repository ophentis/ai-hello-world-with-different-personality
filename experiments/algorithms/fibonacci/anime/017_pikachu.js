// Pikachu's electric sequence
const electric = () => {
  let volt = 0, amp = 1;
  console.log(volt);
  for (let charge = 0; charge < 19; charge++) {
    console.log(amp);
    [volt, amp] = [amp, volt + amp];
  }
};
electric();
