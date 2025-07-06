const nestedArr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log(nestedArr.flat(Infinity));

Array.prototype.myFlat = function (depth = 1) {
    let myArr = this;
    let resArr = [];
    let count = 0;
    function callRecursive(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && count < depth) {
                count++;
                callRecursive(arr[i]);
            } else {
                resArr.push(arr[i]);
            }
        }
        return resArr;
    }
    return callRecursive(myArr);
}
console.log(nestedArr.myFlat(Infinity));