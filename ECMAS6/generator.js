function* generator() {
    console.log("hello1")
    var v = yield "how";
    console.log("hello2")
    v = yield v + "are";
    console.log("hello3")
    v = yield v + "you";
}

var g = generator();
console.log(g.next().value);
console.log(g.next("first ").value);
console.log(g.next("second ").value);
console.log(g.next("third ").value);