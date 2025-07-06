// Function Statements aka Function Declarations
function a() { }
// Function Expressions
var x = function () { }
// Anonymous Functions
// function () { }
// Named Function Expressions
var z = function xy() { }
// First Class functions
var one = function () { }
function callMeWithFunctionArg(param) {
    param();
}
callMeWithFunctionArg(one);

function x() {
    console.log('Invoked function without args');
}
function x(arg1, arg2) { console.log('Invoked function with args'); }

x(1); // in this scenario the 2nd function declaration and definition overrides the 1st function