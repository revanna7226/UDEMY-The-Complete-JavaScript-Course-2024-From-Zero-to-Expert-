'use strict';

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        const bmi = this.mass / (this.height * this.height);
        this.bmi = bmi;
        return bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        const bmi = this.mass / (this.height * this.height);
        this.bmi = bmi;
        return bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than Mark Miller's (${john.bmi})!.`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!.`);
}