'use strict';

const getCode = require('../generatecode').solvepuzzle;
const prompt = require('prompt');

prompt.message = '>';
prompt.delimiter = '';
prompt.start();

let code = '';
function promptForCmd() {

    prompt.get([{ name: 'input', description: '\u200B' }], (err, result) => {
    
        if (result.input.indexOf('make') !== -1) {
            code = getCode('sandwich', result.input);
            if (code.startsWith('X')) {
                console.log('Okay.');
                console.log(code);
            } else {
                console.log('What? Make it yourself.')
            }
        } else {
            console.log("Known commands:");
            console.log("   make");
        }
        if (!code.startsWith('X')) {
            promptForCmd();
        }
    });
}
promptForCmd();
        