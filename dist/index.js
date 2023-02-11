"use strict";
let level = 1;
if (level > 5) {
    console.log('max level reached');
}
else {
    console.log(level);
}
let sales = 123512;
let course = 'TypeScript';
let is_published = true;
let my_document = { name: 'jason', level: 55 };
let my_array = [];
let user = [1, "Jason"];
var Size;
(function (Size) {
    Size["SMALL"] = "s";
    Size["MEDIUM"] = "m";
    Size["LARGE"] = "l";
})(Size || (Size = {}));
let mySize = Size.MEDIUM;
console.log(mySize);
my_array.forEach(n => n.toString);
function render(doc) {
    console.log(doc);
}
render(my_document);
//# sourceMappingURL=index.js.map