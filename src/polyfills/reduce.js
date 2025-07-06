import { arr } from "./utility.js";

/* const reduceResult = arr.reduce((acc, start) => { return acc + start }, 0); */

Array.prototype.myReduce = function (callback, initialValue) {
    const array = this;
    let resValue;
    for (let index = 0; index < array.length; index++) {
        resValue = callback(initialValue, array[index]);
        initialValue = resValue;
    }
    return resValue;
}
const reduceResult = arr.myReduce((acc, start) => { return acc + start }, 0);

console.log(reduceResult);