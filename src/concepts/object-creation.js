let user = {
    fName: 'Jake',
    lName: 'Sully'
};

let user1 = new Object();
user1.fName = 'Ram';
user1.lName = 'Raghav';

let user2 = Object.create(user);
let animal = {
    name: "Animal name"
}
let cat = Object.create(animal);

cat.name = 'xyxz';
console.log(animal);
animal.name = 'Persian';


console.log(cat.name);
console.log(animal);
