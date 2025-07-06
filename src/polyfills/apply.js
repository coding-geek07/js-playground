
let obj = {
    x: 1, y: 2,
    callMe(name, age, address) {
        console.log(this.x, this.y, name);
    }
}
let obj2 = {
    x: 3, y: 4
}
obj.callMe.apply(obj2, ['jack']);

Function.prototype.myApply = function (thisArg, args) {
    const borrowedFunc = this;
    let obj = {
        ...thisArg,
        borrowedFunc
    }
    obj.borrowedFunc(...args);
}

obj.callMe.myApply(obj2, ['jill']);
