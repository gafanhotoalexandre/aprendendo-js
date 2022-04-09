const { lastname, User } = require('./mod1.js');
const p1 = new User('Alexandre');

p1.lastname = lastname;

console.log(p1);
