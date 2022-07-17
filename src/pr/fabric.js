'use strict';

let personProto = {}

personProto.getName = function () { return this.name; }

let studentProto = Object.create(personProto);

studentProto.sleep = function() {
    console.info('ZZzz...');
}

studentProto.create = function(name){
    return Object.create(this, {
        name: {value: name}
    });
}

let leha = studentProto.create('Leha');
