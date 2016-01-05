var calc = require('./calculator');
//returns a function
console.log(calc.calcTotal(5));
// returns original amount with tip applied.



var albumy = require('./albums')
console.log(albumy[5]);


var backpack  = require('./backpack');
var name = backpack.book.isbn;
console.log(name);


var cat = require('./cat');
console.log(cat());
// console logs “meow”
