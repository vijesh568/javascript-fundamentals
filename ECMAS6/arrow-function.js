module.exports.greet = name => "hello " + name;

module.exports.person = {
    name: "John",
    handle: function (message, handle) {
        handle(message);
    },
    print: function () {
        /* Arrow function */
        this.handle("hello", message => console.log(message + " " + this.name))
    }
}