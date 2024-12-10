"use strict";
let age = 20;
let sale = 123456789;
let numbers = [1, 2, 3];
let user = [12, 'sss'];
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
;
let mySize = size.medium;
console.log(mySize);
