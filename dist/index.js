"use strict";
let sales = 123512;
let course = "TypeScript";
let is_published = true;
let my_document = { name: "jason", level: 55 };
let my_array = [];
let user = [1, "Jason"];
let variable1 = undefined;
let variable2 = undefined;
let variable3;
let variable4 = null;
let variable5 = undefined;
var Size;
(function (Size) {
    Size["SMALL"] = "s";
    Size["MEDIUM"] = "m";
    Size["LARGE"] = "l";
})(Size || (Size = {}));
let mySize = Size.MEDIUM;
console.log(mySize);
my_array.forEach((n) => n.toString);
function render(doc) {
    console.log(doc);
}
function doSomething(param) {
    console.log(param);
}
render(my_document);
const my_character = {
    class: "Mage",
    level: 1,
};
const my_triangle = {
    sideALength: 3,
    sideBLength: 3,
    sideCLength: 3,
};
const my_square = {
    sideALength: 3,
    sideBLength: 3,
    sideCLength: 3,
    sideDLength: 3,
};
const amazingFunc = (param) => {
    if (param) {
        console.log("valid parameter");
    }
    else {
        console.log("NOT valid parameter");
    }
};
amazingFunc(false);
amazingFunc(59);
function func1(a, b, c) {
    let sum = a + b + (c || 0);
    return sum;
}
function func2(a, b, c = 5) {
    let product = a * b * c;
    return product;
}
console.log(func1(5, 5, 5), func1(5, 5));
console.log(func2(2, 2, 2), func2(2, 2));
//# sourceMappingURL=index.js.map