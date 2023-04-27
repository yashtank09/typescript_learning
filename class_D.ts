import { login, User } from "./interface_D"; // import interface from another file
import * as UserLogin from "./interface_D"; // import all interface from another file (alias)

// class syntax
class Employee implements login {
    
    // properties of class
    id!: number; // we are using ! operator because of this error: Property 'id' has no initializer and is not definitely assigned in the constructor.
    name!: string;

    // both are private data members
    #mobileNumber !: number; 
    private salaryPackage !: number;

    // 
    protected address!: string;

// Type script can have only default constructor or parameterized constructor.
// It is not possible to have both parameterize and default at same time

    // default constructor
    // constructor(){}

    // parameterized constructor
    constructor(id: number, name: string, address: string, mobileNumber: number, salaryPackage: number){
        this.id = id;
        this.name = name;
        this.address = address;
        this.#mobileNumber = mobileNumber;
        this.salaryPackage = salaryPackage;
    }

    // Getter & Setter
    
    get empPackage() : number {
        return this.salaryPackage;
    }
    
    set empPackage(SalaryPackage: number) {
        this.salaryPackage = SalaryPackage;
    }    

    // static method - can call without creating instance
    static getEmployeeCount(): number{
        return 50;
    }

    // class having methods
    getNameWithAddress() : string {
        return `${this.name} stays at ${this.address}`; // variable string literals
    }

    login(): User {
        return {name: "John", id: 1, email: "john@redmail.com"};
    }
}


// inheritance
class Manager extends Employee {
    constructor(id:number, name:string, address:string, mobileNumber:number, salaryPackage:number){
        super(id, name, address, mobileNumber, salaryPackage);
    }

    getNameWithAddress(): string {
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

console.log(yash.empPackage)
console.log(yash.getNameWithAddress());
console.log(varun.getNameWithAddress());
console.log(Employee.getEmployeeCount());