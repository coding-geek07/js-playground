// all : result of all the promises or don't want any of them; give a quick err
// allSettled : wait for all the promises to settle - [val1, err, val3]
// any: wait for the first success result promise (Seeking for 1st success); if all are failed then it will give an Aggregator error.
// race: gives the first settled promise (either success or failure) result

let p1 = new Promise((resolve, reject) => {
    let x = false;
    if (x) {
        resolve('p1 success');
    } else {
        reject('p1 failure');
    };
});
let p2 = Promise.reject('p2 failure');
let p3 = Promise.reject('p3 rejected');

function logPromiseValue(apiType, promiseObj) {
    promiseObj.then(values => console.log(apiType, values)).catch(err => console.log(apiType, err));
}

let promiseArr = [p1, p2, p3];
logPromiseValue('Promise All api: ', Promise.all(promiseArr)); // All api 
logPromiseValue('Promise All settled api: ', Promise.allSettled(promiseArr)); // All Settled Api
logPromiseValue('Promise race api: ', Promise.race(promiseArr)); // Race api
logPromiseValue('Promise any api: ', Promise.any(promiseArr)); // Any api