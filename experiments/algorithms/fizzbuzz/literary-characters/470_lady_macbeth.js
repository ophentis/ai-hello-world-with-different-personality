// Lady Macbeth - Ambitious Manipulative Ruthlessness
// Ruthless, efficient, no hesitation

const seizeThrone = () => {
  for (let power = 1; power <= 100; power++) {
    let command = "";

    if (power % 3 === 0) command += "Fizz";
    if (power % 5 === 0) command += "Buzz";

    console.log(command || power);
  }
};

seizeThrone();
