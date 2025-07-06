// all : result of all the promises or don't want any of them; give a quick err
// allSettled : wait for all the promises to settle - [val1, err, val3]
// any: wait for the first success result promise (Seeking for 1st success); if all are failed then it will give an Aggregator error.
// race: gives the first settled promise (either success or failure) result
