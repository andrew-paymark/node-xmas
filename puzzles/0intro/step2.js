'use strict';

const request = require('request-promise');
const getCode = require('../generatecode').solvepuzzle;

const TEAMNAME = ''; // make sure this doesn't change!

module.exports = {
    // This function can be `require`d and used to submit your codes
    submit: async function submit(code) {
        return request({
            url: 'https://zgyg9fi6w1.execute-api.ap-southeast-2.amazonaws.com/api/submit',
            method: 'POST',
            json: true,
            body: {
                teamname: TEAMNAME,
                code: code
            }
        });
    }
}

// This is how you use it
// Remember to comment this block out, or it'll submit this code every time!
const submit = require('./step2').submit;
let code = getCode("step2", "we'll fix it in POST");
submit(code)
.then(() => console.log('submitted!'));