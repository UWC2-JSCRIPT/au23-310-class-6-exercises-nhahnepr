/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
    }
        accelerate () {
            this.currentSpeed++;
        }
        brake () {
            this.currentSpeed--;
        }
        toString () {
            console.log(`${this.model} is going at ${this.currentSpeed}.`);
        }
}

const prius = new Car('Prius');
prius.accelerate();
prius.accelerate();
prius.brake();
prius.toString();

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.motor = 'electric';
        this.currentSpeed = 0;
    }
    accelerate () {
        super.accelerate();
        super.accelerate();
    }
    toString() {
        console.log(`${this.model} is going at ${this.currentSpeed}.`);
    }
}
const lightning = new ElectricCar('fordLightning');
lightning.accelerate();
lightning.accelerate();
lightning.brake();
lightning.toString();