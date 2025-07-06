console.log("script3.js: START (defer)");
setTimeout(() => {
    document.body.style.backgroundColor = "green";
    console.log("script3.js: END (defer, after delay)");
}, 2500); // 1.5 second delay
