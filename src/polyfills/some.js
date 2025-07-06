import { arr } from "./utility.js";

/* const someResult = arr.some(item => item === 6); */

Array.prototype.mySome = function (callback) {
    let array = this;
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index])) {
            return true
        }
    }
    return false;
}
const someResult = arr.mySome(item => item === 5);
console.log(someResult)