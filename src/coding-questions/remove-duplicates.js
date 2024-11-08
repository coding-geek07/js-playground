// Write a program to remove duplicates from an array ?,1
let defarr = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];

function removeDuplicates(arr) {
    // create an new arr
    // check if the item is present in the new arr
    // if it is there return and proceed
    // if it is not there i have to push the item in the new arr
    // loop continues
    // return the new arr

    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (newArr.indexOf(arr[index]) == -1) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

function removeDuplicatesSet(arr) {
    return Array.from(new Set(arr));
    // return [...new Set(arr)];
}
console.log(removeDuplicates(defarr));
console.log(removeDuplicatesSet(defarr));
