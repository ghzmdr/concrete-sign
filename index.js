var five = require("johnny-five");
var board = new five.Board({
    port: '/dev/ttyUSB1'
});

function init() {
    const servo = new five.Servo(9);
    servo.sweep();
}

board.on('ready', init);
