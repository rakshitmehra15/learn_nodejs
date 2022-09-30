const readline = require("readline").createInterface({
  input: process.stdin,
});
const read = () => new Promise((resolve) => readline.question(``, resolve));
let log = console.log;

// Code starts here
async function main() {
  log("Please choose number between 1 to 10:");
  let number = await read();

  log("You have choosen:", number);

  let luckyNumber = Math.floor(Math.random() * 10);

  //  comparison operators ===, >, <
  if (number === luckyNumber) {
    log("Congrats, you won!");
  } else {
    log("Sorry, you lost!");
  }

  //   log("Lucky number was:", luckyNumber);

  readline.close();
}
main();
