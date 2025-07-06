import { arr } from "./utility.js";

/* const filterResult = arr.filter(item => item % 2 == 0); */

Array.prototype.myFilter = function (callback) {
    const array = this;
    let resultArr = [];
    for (let index = 0; index < array.length; index++) {
        const boolean = callback(array[index]);
        if (boolean) {
            resultArr.push(array[index]);
        }
    }
    return resultArr;
}

const filterResult = arr.myFilter(item => item % 2 == 0);
console.log(filterResult)