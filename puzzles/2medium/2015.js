'use strict';

var util = require('util');
var getCode = require('../generatecode').solvepuzzle;

if (process.versions.node.split('.')[0] > 4) {
    console.error("Woah you're running a version of node from the future");
    console.error("We haven't tested against your version yet");
    console.error();
}

console.log(getCode('2015', util.p.toString()));