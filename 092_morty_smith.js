// Oh geez, oh man... I-I really hope I do this right.
// G-Grandpa Rick said I should just print the message but...
// w-what if I mess it up??

const message = "Hello, World!";

function sayItMorty() {
  // L-like, okay, so we're gonna... gonna print this thing
  try {
    console.log(message);
    // D-did it work? Oh geez, I think it worked...
  } catch (err) {
    // OHHH MANNN, W-what do I do?!
    console.error(`Oh g-geez, m-my code broke! ${err.message}`);
    process.exit(1);
  }
}

sayItMorty();

// A-alright, aw geez, I-I just wanna go home and play
// video games or something... is this done? P-please?
