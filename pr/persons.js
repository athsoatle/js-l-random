'use strict';

let person = {
    getName: function () {
        return this.name;
    },
    type: 'human'
};

let teacher = {
    name: "Bursky",
    sleep: function () {
    }
};

Object.setPrototypeOf(teacher, person);

var student1 = {}

Object.defineProperty(student1, 'gender', {
    writable: false,
    value: 'male'
});

Object.defineProperty(person, 'age', {
    set: function(age) { this._age = parseInt(age); },
    get: function() { return this._age; }
})

let student = Object.create(person);
Object.getPrototypeOf(student1)
Function.prototype