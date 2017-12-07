'use strict';

const getCode = require('../generatecode').solvepuzzle;

const encrypted = 'GBC FRPERG ZRFFNTR QB ABG ERNQ';
let plainText = 'TOP SECRET MESSAGE DO NOT READ';

console.log(getCode('rot', plainText));
