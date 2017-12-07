
const getCode = require('../generatecode').solvepuzzle;
const prompt = require('prompt');


console.log("What was the name of the first node meetup this year?");
prompt.start();

prompt.get(['input'], (err, result) => {

    if(err) {
        console.log('wtf');
        console.log(err);
        return;
    }

    console.log("You entered: " + result.input)
    console.log(getCode('reminisce', result.input));

});
