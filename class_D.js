"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_mobileNumber;
// class syntax
class Employee {
    // Type script can have only default constructor or parameterized constructor.
    // It is not possible to have both parameterize and default at same time
    // default constructor
    // constructor(){}
    // parameterized constructor
    constructor(id, name, address, mobileNumber, salaryPackage) {
        // both are private data members
        _Employee_mobileNumber.set(this, void 0);
        this.id = id;
        this.name = name;
        this.address = address;
        __classPrivateFieldSet(this, _Employee_mobileNumber, mobileNumber, "f");
        this.salaryPackage = salaryPackage;
    }
    // Getter & Setter
    get empPackage() {
        return this.salaryPackage;
    }
    set empPackage(SalaryPackage) {
        this.salaryPackage = SalaryPackage;
    }
    // static method - can call without creating instance
    static getEmployeeCount() {
        return 50;
    }
    // class having methods
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`; // variable string literals
    }
}
_Employee_mobileNumber = new WeakMap();
// inheritance
class Manager extends Employee {
    constructor(id, name, address, mobileNumber, salaryPackage) {
        super(id, name, address, mobileNumber, salaryPackage);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
// let john = new Employee();
let yash = new Employee(1123, "Yash", "Ghatlodiya, Ahmedabad", 7894562130, 240000);
let varun = new Manager(123, "Varun", "Vastrapur, Ahmedabad", 9875641230, 450000);
// john.id = 1120;
// john.name = "John Dominic";
// john.address = "4Th Street, Richard Palace, New York";
// console.log(yash);
// console.log(yash.salaryPackage); // can not access
yash.empPackage = 280000;
console.log(yash.empPackage);
console.log(yash.getNameWithAddress());
console.log(varun.getNameWithAddress());
console.log(Employee.getEmployeeCount());
