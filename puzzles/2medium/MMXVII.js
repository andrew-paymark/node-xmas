

var util = require('util');
var getCode = require('../generatecode').solvepuzzle;

let a = [1,2,3];
let b = [1,2,3];

let y = {a: '1', b:'2', c:'3'};
let z = {a: '1', b:'2', c:'3'};

let results = [];

results.push(util.isDeepStrictEqual(a,b));
results.push(util.isDeepStrictEqual(a,y));
results.push(util.isDeepStrictEqual(a,z));
results.push(util.isDeepStrictEqual(b,y));
results.push(util.isDeepStrictEqual(b,z));
results.push(util.isDeepStrictEqual(y,z));

console.log(getCode('MMXVII', results));

