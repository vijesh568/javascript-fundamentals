var arrow = require('./arrow-function');
console.log(arrow.greet("ramesh"));  

arrow.person.print();


var array = require('./let-keyword');
array.forEach(function(f){
    f();
});


var f = require('./default-parameter');
f("hello");

