function x() {
    console.log('Invoked function without args');
}
function x(arg1, arg2) { console.log('Invoked function with args'); }

x(1); // in this scenario the 2nd function declaration and definition overrides the 1st function