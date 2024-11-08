let package = {
    version: "2.0",
};
let application = Object.create(package, {
    name: { value: "game" },
}); // inherited from package
console.log(application);
console.log(Object.getPrototypeOf(application));

// Note the package object doesn't exist on the application object but it exists on prototype chain (__proto__)