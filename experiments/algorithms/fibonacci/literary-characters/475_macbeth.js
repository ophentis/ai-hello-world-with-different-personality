// Macbeth - Ambitious Guilt-Ridden Usurper
// The spiral of ambition and decay

const descendIntoMadness = () => {
  let throne = 0;
  let blood = 1;

  console.log(throne);
  console.log(blood);

  for (let act = 0; act < 18; act++) {
    const doom = throne + blood;
    console.log(doom);
    throne = blood;
    blood = doom;
  }
};

descendIntoMadness();
