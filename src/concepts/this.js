// this in global space
console.log(this); // globalObject i.e window

// this inside a function
function x() {
    // the value depends on strict / non strict mode
    // strict mode - this will be undefined
    // non strict mode - this will be window object
    console.log(this);
}
x();
// this inside non strict mode - (this substitution)
/**
 * if the value of this keyword is undefined or null
 * this keyword will be replaced with globalobject
 * only in non strict mode
 */

// this keyword value depends on how the function is called (window)
x(); // undefined - strict mode, window - non strict mode
window.x(); // window  - because this keyword depends on how it is called, here window is calling so it takes reference of window.


// this inside a object's method
const obj = {
    a: 10,
    x: function () {
        console.log(this); // this points to the obj, as mentioned above it matters how it is called, obj.x()' // {a" 10,x: f}
    }
};
obj.x();

// call apply bind methods (sharing methods)
const student1 = {
    name: 'John',
    printName: function () {
        console.log(this.name);
    }
}

const student2 = {
    name: 'Dave',
}
student1.printName.call(student2); // this points to the student2 obj so it logs dave

// this inside arrow function
const obj1 = {
    a: 10,
    x: () => {
        console.log(this); // this points to the obj's enclosing lexical scope which is globalObject, obj.x()' // window
    }
};
// this inside nested arrow function
const obj2 = {
    a: 10,
    x: function () {
        // enclosing lexical context
        const y = () => {
            console.log(this); // this points to the obj's enclosing lexical context which is x function's this keyword, so x function this will point to obj2 // {a: 10, x:f}
        }
        y();
    }
};
// this inside DOM element => reference to HTML elements

// this inside class, constructor 
