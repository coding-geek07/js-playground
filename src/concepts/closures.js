// function outer() {
//     var a = 1;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// outer()();

function a() {
    // setTimeout(function () {
    //     console.log(x);

    // }, 0);
    // var x = 1;
    // for (var i = 0; i < 5; i++) {
    //     setTimeout(function () {
    //         console.log(i);
    //     }, 1000);
    // }
    var func = [];
    for (var i = 0; i < 5; i++) {
        func[i] = function () {
            console.log(i);
        };
    }
    func[3]();
}
a();

