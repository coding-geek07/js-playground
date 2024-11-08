const findReverse = (sampleString) => {
    let reverse = "";
    for (let i = sampleString.length - 1; i >= 0; i--) {
        reverse += sampleString[i];
    }
    console.log(reverse);
};
findReverse("Hello Iam Saikrishna Ui Developer");