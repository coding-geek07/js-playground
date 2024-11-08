let count = 0;
const intervalId = setInterval(() => {
    console.log(count++);
    if (count > 5) {
        clearInterval(intervalId); // Stop the interval after 5 i
    }
}, 1000); // Execute every 1 second

// o/p: 0 1 2 3 4 5 6 7 8 9.. so on,  if we dont mention the clearinterval it will continue to run the call back function which causes memory leaks 