const findLongestWord = (sentence) => {
    let wordsArray = sentence.split(" ");
    let longestWord = "";
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }
    console.log(longestWord);
};
findLongestWord("Hi Iam Saikrishna Iam a UI Developer");