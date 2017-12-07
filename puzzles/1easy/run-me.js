const getCode = require('../generatecode').solvepuzzle;
const prompt = require('prompt');


console.log('What is the answer to life the universe and everything?');
prompt.start();

prompt.get(['input'], (err, result) => {

    if(err) {
        console.log('wtf');
        console.log(err);
        return;
    }

    console.log("You entered: " + result.input)
    console.log(getCode('theanswer', result.input));

});
