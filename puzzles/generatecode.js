//
// This script is to calculate the unique code (answer) for each puzzle.
// There is no reason to edit this file for the challenges (we promise).
//


var RandomSeed = require('random-seed');


var puzzleOffset = {
    "intro": 850238,
    "whyistheinternetbroken": 331023,
    "reminisce": 554778,
    "rot": 413441,
    "theanswer": 1264725,
    "magic": 457394,
    "sandwich": 677778,
    "MMXVII": 794371,
    "2015": 125990,
    "step2": 3,
    "hiding": 435309
}


function solvepuzzle(puzzleId, solution) {

    var seed = JSON.stringify(solution) + puzzleId + puzzleOffset[puzzleId];
    var rand = RandomSeed.create(seed);

    var code = "";

    for (var i=0; i<12; i++) {
        code += String.fromCharCode(rand.intBetween(97, 97+25));
    }



    code = code.toUpperCase();

    code = code.slice(0, 4) + '-' + code.slice(4);

    return code;

};


// We should probably remove this before we do this live.
// If you see this message then we totally forgot to do this.
function search(puzzleId, solution) {

    var code = solvepuzzle(puzzleId, solution);

    while (!code.startsWith('XMAS')) {
        puzzleOffset[puzzleId] = puzzleOffset[puzzleId]+1;
        code = solvepuzzle(puzzleId, solution);
    }

    console.log("Found offset for puzzle: " + puzzleId);
    console.log("\"" + puzzleId + "\": " + puzzleOffset[puzzleId]);

    return code;
};


module.exports = {
    solvepuzzle: solvepuzzle,
    search: search
}
