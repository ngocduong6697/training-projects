"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log('Result ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 17));
var combineValues;
combineValues = add;
console.log(combineValues(8, 17));
addAndHandle(10, 20, function (result) {
    console.log(result);
    return result;
});
