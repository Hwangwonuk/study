"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var wonuk = new Person_1.Person('wonuk', 'Programmer');
var callback = function () {
    console.log("i'm callback.");
};
var callee = wonuk.callee('wonuk', callback);
console.log(callee());
//# sourceMappingURL=Main.js.map