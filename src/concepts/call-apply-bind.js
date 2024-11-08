let obj1 = {
    fName: 'Ram',
    lName: 'Raghav'
};
let obj2 = {
    fName: 'John',
    lName: 'Jason'
};
let obj3 = {
    fName: 'Jake',
    lName: 'Sully'
};
const printName = function (greet) {
    this.fName = 'Modified Name';
    console.log(this.fName + this.lName + greet);
}

printName.call(obj1, 'Says hello from call');
printName.apply(obj2, ['Says hello from apply']);
const printBindName = printName.bind(obj3, 'Says hello from bind');
printBindName();
console.log(obj1);
