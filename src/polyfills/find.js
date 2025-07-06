import { arr } from "./utility.js";

/* const findResult = arr.find(item => item === 6); */
Array.prototype.myFind = function (callback) {
    let array = this;
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index])) {
            return array[index];
        }
    }
    return undefined;
}


const findResult = [{ user: 'james' }, { user: 'john' }, { user: 'alex' }].myFind(item => item.user === 'alex');
console.log(findResult);
