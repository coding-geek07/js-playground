import { arr } from "./utility.js";
/* 
const mapResult = arr.map((item, index, self) => {
    return item * 2;
}); */

Array.prototype.myMapFunc = function (callback) {
    if (!callback) {
        throw new Error("Callback is not passed");
    }
    const myArr = this;
    let resArr = [];
    for (let index = 0; index < myArr.length; index++) {
        resArr.push(callback(myArr[index], index, myArr))
    }
    return resArr;
}
const mapResult = arr.myMapFunc((item, index, self) => {
    return item % 2 === 0 ? item * 2 : item;
});
console.log(mapResult);

