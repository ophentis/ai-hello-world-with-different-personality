// Pop culture reference #47: Nonlinear narrative structure
// [SCENE 3 - The Diner]

const dialogue = {
  opening: "You know what the problem with hello worlds is?",
  subtext: "Too linear. Too safe."
};

// We start here, but the story began somewhere else.
// [FLASHBACK TO SCENE 1]
const firstLine = "Hello, ";

// [JUMP TO SCENE 5]
const middleBit = "World";

// [CUT BACK TO SCENE 3]
function getThePoint() {
  // Tarantino loves foot close-ups, briefcases, and prolonged dialogue.
  const finalWord = "!";

  // Now we piece it together in the order HE chose.
  const message = firstLine + middleBit + finalWord;

  // Cool guys don't look at explosions. They execute the code.
  console.log(message);
}

getThePoint();
