export interface User {
    name: string;
    age?: number; // '?' - optional property
    //age: number; - normal property
    id: number;
    email: string;
}

// let user: User = {name: "John", id: 1, email: "John@gmail.com"}; // property missing
let { name: userName, id, email }: User = { name: "John", id: 1, email: "John@gmail.com" }; // object destructuring

/*
// accessing properties normally
user.name;
user.email;
*/

interface workers extends User { // interface inheritance
    salary: number;
}

let worker: workers = { name: "John", id: 1, email: "john@redmail.com", salary: 25000 };

// interface with function
export interface login {
    login(): User;
}

// array destructuring
let [user1, user2, ...restUsers]: User[] = [
    { name: "Moana", id: 1, email: "moana@gmail.com" }, 
    { name: "Barry", id: 2, email: "barry@starlabs.com" },
    { name: "Cisco", id: 3, email: "cisco@starlabs.com"},
    { name: "Roni", id: 4, email: "roni@starlabs.com"},
    { name: "Brad", id: 5, email: "brad@starlabs.com"}
];

console.log(user1);
console.log(user2);
console.log(restUsers);

// some functions
let result = restUsers.filter((user: User) => user.id > 3);  // filtering array
console.log(result);