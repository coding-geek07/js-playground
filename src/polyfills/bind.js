
let obj = {
    x: 1, y: 2,
    callMe(name) {
        console.log(this.x, this.y, name);
    }
}
let obj2 = {
    x: 3, y: 4
}
const bindResFunc = obj.callMe.bind(obj2, 'jack');
bindResFunc();

Function.prototype.myBind = function (thisContext, ...args) {
    thisContext.borrowedFunc = this;
    return function () {
        thisContext.borrowedFunc(...args);
    };
}

let myBindResFunc = obj.callMe.myBind(obj2, 'jill');
myBindResFunc();