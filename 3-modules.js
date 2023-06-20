 //Modules - Encapsulated code (only share th eminimum)
 //CommonJs, every file is Module (by Default)
 
const names = require('./4-names')
const sayHi = require('./5-utils')
const person = require('./6-alternative-falvor');
console.log(person)
console.log(names)

 sayHi('Susan')
 sayHi(names.john)
 sayHi(names.peter)