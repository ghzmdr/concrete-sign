const five = require("johnny-five");

module.exports = class Letter {
    constructor(pin, maxRotation) {
        this.pin = pin;
        this.maxRotation = maxRotation;
        this.servo = new five.Servo(pin);
    }

    setRotation(deg, ms, steps) {
        if (deg < 0) deg =0;
        if (deg > this.maxRotation) deg = this.maxRotation;

        this.servo.to(deg, ms, steps);
    }
}
