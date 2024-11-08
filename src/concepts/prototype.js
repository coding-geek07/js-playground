function Student() {
    this.name = "Saikrishna",
        this.exp = "8"
}

Student.prototype.company = "Hexagon"
let std1 = new Student();
std1.exp = "9"
let std2 = new Student();
std2.exp = "10"
console.log(std1);
console.log(std2)