module.exports.counter= function(value) {
    var count = function() {
        console.log("count="+ ++value);
    }
    return count;
}