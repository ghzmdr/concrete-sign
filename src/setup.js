const five = require("johnny-five");
const PORT = require('../config').PORT;

const Letter = require('./Letter');

const setupBoard = _ => new Promise(res => {
    const board = new five.Board({
        port: PORT
    });

    board.on('ready', _ => res(board));
});


const setupLetters = letterPinMap => {
    const letterPinMapReducer = (letters, letter) => {
        const pin = letterPinMap[letter];

        letters[letter] = new Letter(pin);
        return letters;
    }

    return Object.keys(letterPinMap)
        .reduce(letterPinMapReducer, {});
}

module.exports = {
    setupBoard,
    setupLetters
};
