
let obj = {
    x: 1, y: 2,
    callMe(name) {
        console.log(this.x, this.y, name);
    }
}
let obj2 = {
    x: 3, y: 4
}
obj.callMe.call(obj2, 'jack');

Function.prototype.myCall = function (thisContext, ...args) {
    thisContext.borrowedFunc = this;
    thisContext.borrowedFunc(...args);
}

obj.callMe.myCall(obj2, 'jill');
