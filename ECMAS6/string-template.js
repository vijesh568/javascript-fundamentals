function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
    return values[0]+strings[1];
}

var greeting = "hello";

var text = tag`${greeting} world`;

console.log(text);