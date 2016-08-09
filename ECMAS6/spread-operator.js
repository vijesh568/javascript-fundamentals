var first = [1, 2, 3];
var second = [4, 5, 6];

/*Merge array using operator*/
first.push(...second);

console.log(first);

function addThreeNumbers(a, b, c) {
    console.log(a + b + c);
}

addThreeNumbers(...first);
addThreeNumbers(...second);