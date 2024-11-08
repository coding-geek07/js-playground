// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function findEvenNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]); // Add even numbers to the r
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, -8, 19, 9, 10];
console.log("Even numbers:", findEvenNumbers(numbers));
console.log("Even numbers:", numbers.filter(item => item % 2 == 0));