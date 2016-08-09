function genObject() {
    return {
        name:"john",
        color:"blue",
        state:"new york"
    }
}

var {name:firstName, color:eyeColor} = genObject();

console.log(firstName);
console.log(eyeColor);


var []