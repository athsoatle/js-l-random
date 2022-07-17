'use strict';

function Student(name){
    this.name = name;
}

function Person(){
    this.type = 'human';
}

Person.prototype.getName = function() {
    return this.name;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.sleep = function() {
    console.log('Zzz Zzz')
}
Student.prototype.constructor = Student;


let kr = new Student('Krendel');
