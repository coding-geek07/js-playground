console.log("script2.js: START (async)");
setTimeout(() => {
    document.body.style.backgroundColor = "blue";
    console.log("script2.js: END (async, after delay)");
}, 1000); // 0.5 second delay
