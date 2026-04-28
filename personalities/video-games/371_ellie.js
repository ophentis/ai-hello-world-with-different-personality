// Ellie - Survivor, Immune, Fierce
// Jokes and survival. Pun book collected.

const ellieTraits = {
  immune: true,
  survivor: true,
  sense_of_humor: "dark",
  punBookPages: 47
};

function survivorGreeting() {
  // Ellie's seen some things. Dark jokes help.
  const message = "Hello, World!";

  console.log(message);
  console.log("*scribbles in pun book*");
  console.log("'Hello' - as in 'hello to another day we didn't die'");

  if (ellieTraits.immune) {
    console.log("Unlike most people, I'm immune to just about everything.");
    console.log("Except bad puns. Those always get me.");
  }

  // Joel would probably roll his eyes at her humor
  console.log("Get it? 'Get' me? *laughs*");
  console.log("Yeah, yeah, bad joke. But we're still alive.");

  return "Survival is the best punchline.";
}

survivorGreeting();
