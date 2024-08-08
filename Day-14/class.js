// // Activity - 1
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     static message(){
//         return "Class and object in Js"
//     }
//     get personName() {
//         return this.name
//         }
//     set fullname (stName){
//         this.studentName = stName;
//     }
// }
// Person.prototype.greeting = function() {
//     return "Hi, class and objets in Js";
// }
// const person1 = new Person("Danish", 22);
// // console.log(person1);
// const myMethod = new Person(); 
// // console.log(myMethod.greeting()); // Corrected to call the method properly
// // console.log(Person.message()); // Corrected to call the method properly
// console.log(person1.personName); //getter method
// person1.stName = "Danish Ansari"
// console.log(person1.stName); // setter method


// // Activity - 2
// class Students extends Person {
//     static studentCount = 0;
//     constructor(name, age, studentID) {
//         super(name, age);
//         this.Id = studentID;
//         Students.studentCount++;
//     }


//     show() {
//         return this.greeting() + " new class with student id added: " + this.Id;
//     }
// }

// const student = new Students("Rabiya", 22, "ID2021");

// // console.log(student);
// // console.log(student.show());
// // console.log(Students.studentCount); 

// private field of account class declared

class Account {
    #balance
    constructor(balance) {
        this.#balance = balance
    }

    get balance (){
        return this.#balance
    }

    deposite(bal){
        this.#balance+=bal;
    }
    whitdraw(amt) {
        this.#balance -= amt;
      }
}

const danishAc = new Account(5000)
console.log(danishAc.balance); // balance 5000
danishAc.deposite(300)
console.log(danishAc.balance); // balance 5300
danishAc.whitdraw(50)
console.log(danishAc.balance); // balance 5250

