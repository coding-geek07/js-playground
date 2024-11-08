export const sumOfThirds = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 3) {
        sum += arr[i];
    }
    return sum;
};