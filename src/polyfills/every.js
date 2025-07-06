import { arr } from "./utility.js";
/* const everyResult = arr.every(item => item > 1); */

Array.prototype.myEvery = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}
const everyResult = arr.myEvery(item => item > 1);
console.log(everyResult)