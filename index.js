/**
 * Exercise 1 - Phone
 */

function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
}

Phone.prototype.details = function() {
    console.log(`Phone : ${this.brand} ${this.model}`);
}

const phone = new Phone("Samsung", "S22");
phone.details();




/**
 * Exercise 2 - Rectangle
 */


function Rectangle(width , height) {
    this.width  = width ;
    this.height = height;
}

Rectangle.prototype.area = function() {
    console.log((this.width)*(this.height));
}

const rectangle = new Rectangle(5, 4);
rectangle.area();


/**
 * Exercise 3 - BankAccount
 */


function BankAccount (owner, balance) {
    this.owner  = owner ;
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
    this.balance = this.balance + amount;
    console.log(`balance: ${this.balance}`);
}

BankAccount.prototype.withdraw = function(amount) {
    if (amount < this.balance){
        this.balance = this.balance - amount;
        console.log(`balance: ${this.balance}`);
    } else {
        console.log(`balance < ${amount}`);
    }
    
    
}

BankAccount.prototype.checkBalance = function() {
    console.log(`balance: ${this.balance}`);
}

const bankAccount = new BankAccount("Shira", 20000);
bankAccount.checkBalance();
console.log(bankAccount.owner, bankAccount.balance);
bankAccount.deposit(2000);
bankAccount.withdraw(3000);
bankAccount.checkBalance();





/**
 * Exercise 4 - Animal & Dog
 */


function Animal (name) {
    this.name = name;

}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`)
};

const Dog = new Animal("Rocky");
Dog.bark = function() {
    console.log(`${this.name} barks`);
}

Dog.speak();
Dog.bark();


/**
 * Exercise 5 - Vehicle & Car
 */


function Vehicle (type) {
    this.type = type;

}

Vehicle.prototype.describe = function() {
    console.log(`This is a ${this.type}`)
};


function Car(brand) {
    this.brand = brand;
    this.type = "car";

}

Car.prototype.info = function() {
    console.log(`This is a ${this.brand} ${this.type}`)
};


Object.setPrototypeOf(Car.prototype, Vehicle.prototype);


const car = new Car("BMW");

car.describe();
car.info();


 
/**
 * Exercise 6 - Shape Polymorphism
 */


function Shape() {

}

Shape.prototype.area = function () {
    return 0;
}

function Circle(radius) {
    this.radius = radius;

}

Object.setPrototypeOf(Circle.prototype, Shape.prototype)

Circle.prototype.area = function() {
    return Math.PI*this.radius*this.radius;
 }

 const circle = new Circle(5);

 console.log(circle.area())


function Square(side) {

    this.side = side;
}

Object.setPrototypeOf(Square.prototype, Shape.prototype)

Square.prototype.area = function () {
    return this.side * this.side;
}

const square = new Square(5);

console.log(square.area())



/**
 * Exercise 7 - Book
 */


class Book {

    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    info() {
        console.log(`${this.title} by ${this.author}`)
    }

}

const book = new Book("The Hobbit", "Tolkien");
book.info();



/**
 * Exercise 8 - Person & Student
 */

class Person {

    constructor(name) {
        this.name = name; 

    }

    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, school) {
        super(name);
        this.school = school;
    }

    study() {
        console.log(`${this.name} is studying at ${this.school}`)
    }

}


const student = new Student("Alice", "Oxford");

student.greet();
student.study();


/**
 * Exercise 9 - Employee & Manager (Polymorphism + Private Fields)
 */

class Employee {
    #salary;

    constructor(salary){
        this.#salary = salary;
    }

    getSlary(){
        return this.#salary;
    }
    work() {
        console.log(`Employee is working`);
    }
}

class Manager extends Employee {
    work(){
        console.log(`Manager is managing`)
    }
}

const employee = new Employee(4000);
console.log(employee.getSlary())
employee.work();

const manager = new Manager(5000);
console.log(manager.getSlary())
manager.work();


