const setupBoard = require('./src/setup').setupBoard;
const setupLetters = require('./src/setup').setupLetters;

const MAX_ROT = 180;
const LETTERS = {
    C: 9
};

async function setup() {
    const board = await setupBoard();
    const letters = setupLetters(LETTERS);

    const injectable = {
        letters
    };

    console.log(
        '[+] Welcome! You can use these objects: \n\n\t -',
            Object.keys(injectable).join('\t -'), '\n\n'
    );

    board.repl.inject(injectable);
}

setup()
