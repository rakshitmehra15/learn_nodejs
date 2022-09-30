const readline = require("readline").createInterface({
  input: process.stdin,
});
const read = () => new Promise((resolve) => readline.question(``, resolve));
let log = console.log;

// Code starts here
async function main() {
  log("Please enter your age");
  let atulBorn = await read();
  let currentYear = 2022;

  let age = currentYear - atulBorn;
  log("Your age is:", age);

  log("Thank You For Valuable Time");
  log("whats The time");
  readline.close();
}
main();
