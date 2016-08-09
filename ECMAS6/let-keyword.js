var a = [];
/*
let enabled the block scope for a variable. Else the scope is function scope for a variable.
*/
for (let i = 0; i < 10; i++) {
    a.push(function () {
        console.log(i);
    });
}
module.exports = a;