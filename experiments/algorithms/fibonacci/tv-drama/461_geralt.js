// Geralt - Gruff Monster Hunter
// Hmm. Twenty numbers. Simple.

const hunt = () => {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);
  for (let i = 0; i < 18; i++) {
    let t = a + b;
    console.log(t);
    a = b;
    b = t;
  }
};

hunt();
