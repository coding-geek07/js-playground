/* 
* ARROW FUNCTION BEHAVIOR
* This keyword inside:
* function declarations : access its lexical scope
* arrow functions: by default it is undefined but because of 'this substitution'
* it access the global object always
* Note: Even if it is nested deep inside it will refer to the global obj
*/

let obj = {
    a: 1,
    funcDeclaration: () => {
        console.log('Arrow Function')
        console.log(this); // it refers to global object
    },
    arrowFunc: function () {
        console.log('Normal Function');
        console.log(this.funcDeclaration()); // it refers to obj environment
    },
    deepObj: {
        b: 2,
        deepObjArrFunc: () => {
            console.log('Deep Obj Arrow Function')
            console.log(this); // still it refers to the global obj
        }

    },
};
obj.funcDeclaration();
obj.arrowFunc();
/* 
*   ARGS Behavior in normal functions and arrow functions
*/
// Normal Functions
function normalFuncLogArgs() {
    console.log(arguments); // this will return the args passed : { '0': 1, '1': 2, '2': 3 }
}
let arrowFuncLogArgs = () => {
    console.log(arguments); // arguments is not defined
}
arrowFuncLogArgs(4, 5, 6);
normalFuncLogArgs(1, 2, 3);

// Cannot be used as constructor functions
function normalFuncConstructor() {
    let fName = 'Jake';
    let lName = 'Sully';

    console.log(this.fName, this.lName);

}