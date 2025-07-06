const arr = [1, 2, 3, 4, 5];
console.log(arr.findIndex(item => item === 0));

Array.prototype.myFind = function (callback) {
    let myArr = this;
    for (let i = 0; i < myArr.length; i++) {
        if (callback(myArr[i])) {
            return i;
        }
    }
    return -1;
}
console.log(arr.findIndex(item => item === 5));