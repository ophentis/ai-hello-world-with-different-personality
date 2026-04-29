// Romeo - Passionate Impulsive Romantic
// Passionate, intense, burning approach

const burnWithLove = () => {
  for (let heartbeat = 1; heartbeat <= 100; heartbeat++) {
    let passion = "";

    if (heartbeat % 3 === 0) passion += "Fizz";
    if (heartbeat % 5 === 0) passion += "Buzz";

    console.log(passion || heartbeat);
  }
};

burnWithLove();
