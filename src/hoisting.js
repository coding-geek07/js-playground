
console.log(a);
var bres = cgreet();

var a = 10;

function cgreet() {
    console.log("Good Morning.");

    function csayBye() {
        return 'Bye!' + name;
    }

    var x = csayBye();
    var name = 'John';
    return x;
}

console.log(bres);
