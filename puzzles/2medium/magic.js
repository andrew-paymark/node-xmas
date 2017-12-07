
var getCode = require('../generatecode').solvepuzzle;


let magic = () => {
	let a = NaN;
	return a != a;
}

console.log("Is this magic?")
if(magic()) {
	console.log("YAY! IT IS! YOU SOLVED IT!");
	console.log(getCode('magic', magic.toString()));
}
else {
	console.log("No :-( it's not magic");
	console.log("Better try change the value of A");
	// You should listen to that ^ I wouldn't change anything apart from the value of `a`.
	// Heck, even that semicolon is important.
	// Side note - who the $@!* uses ; these days?!
}
