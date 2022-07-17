function Person(name) {
    this.name = name;
    this.type = 'human';
}

function Student(name) {
    Person.call(this, name);
}

function Lecturer(name) {
    Person.call(this, name);
}

Person.prototype.getName = function () {
    return this.name;
}

Student.prototype = Object.create(Person.prototype);
Lecturer.prototype = Object.create(Person.prototype);

Lecturer.prototype.say = function () {
    console.info('Hey you');
}
Lecturer.prototype.constructor = Lecturer;

Student.prototype.sleep = function () {
    console.log('Zzz Zzz');
}
Student.prototype.constructor = Student;

Student.prototype.getName = function () {
    return 'Student ' + Person.prototype.getName.call(this);
};