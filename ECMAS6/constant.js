if(true) {
    /* const is having a block scope like let. */
    const foo = 'bar';
    console.log(foo);
}


/* Object enhancement in ES 6*/
var speed = 10;
var name = "toyota";

var car = {name, speed};
console.log(car);