/*
Default parameter can be defined in the parameter list itself.
 */
module.exports = function (message, name = "nick") {
    console.log(message + " " + name);
}


/* Default value for a fucntion argument. */
let f = (func = () => console.log("complete")) => func()

f();