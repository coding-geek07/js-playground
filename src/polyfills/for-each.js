import { arr } from "./utility.js";

// arr.forEach(item => console.log(item));

Array.prototype.myForEach = function (callback) {
    let myArr = this;
    for (let index = 0; index < myArr.length; index++) {
        callback(myArr[index], index);
    }
}

arr.myForEach((item, i) => { console.log(item, i) });