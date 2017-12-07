//
//
//
const getCode = require('../generatecode').solvepuzzle;


console.log("Hi there! And welcome to the Node XMAS CTF!");
console.log("This is a quick intro into how you'll be solving the challenges.")

console.log();

console.log("For each puzzle you will need to run `node puzzlename.js` to get a unique code.");
console.log("This unique code will always start with 'XMAS-'");
console.log("(e.g. you are looking for codes like this: XMAS-OXSFGCZL)");

console.log();

console.log("Unfortunately a lot of these puzzles are broken. So you will need to fix them up first.");
console.log();

console.log("For this first puzzle, you'll need to uncomment the lines in this script in order to get the correct code");
console.log();

let solution = "wrong answer";

solution = "solved!";

let code = getCode("intro", solution);

console.log("Your code is: " + code);
console.log("If that code does not start with XMAS- then you probably haven't solved this one yet.");

console.log();

console.log("Once you have figured out this challenge, proceed onto step2.js");
