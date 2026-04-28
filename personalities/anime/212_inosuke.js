// INOSUKE - Feral, dual-wielding warrior with questionable pronunciation

const boarMask = "ON";
let leftClaws = true;
let rightClaws = true;

function roar(text) {
  console.log("KEEEEEEEE!! " + text + "!!");
}

function incorrectlyNameIt(realName, fakeNameByInosuke) {
  roar("It's called " + fakeNameByInosuke + ", not " + realName);
}

// Dual wielding swords—striking with raw power!
if (leftClaws && rightClaws) {
  console.log("Hello, World!");
} else {
  roar("WHATCHA LOOKIN AT?!");
}

// Inosuke mispronouncing everyone's names as usual
incorrectlyNameIt("Tanjiro", "Snowhead");
incorrectlyNameIt("JavaScript", "Script-Java-Battle-Code");

roar("I'M THE STRONGEST!!");
