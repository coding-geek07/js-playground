console.log("script1.js: START (normal)");
setTimeout(() => {
    document.body.style.backgroundColor = "red";
    console.log("script1.js: END (normal, after delay)");
}, 10000); // 1 second delay
