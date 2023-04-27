"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let user: User = {name: "John", id: 1, email: "John@gmail.com"}; // property missing
let { name: userName, id, email } = { name: "John", id: 1, email: "John@gmail.com" }; // object destructuring
let worker = { name: "John", id: 1, email: "john@redmail.com", salary: 25000 };
// array destructuring
let [user1, user2, ...restUsers] = [
    { name: "Moana", id: 1, email: "moana@gmail.com" },
    { name: "Barry", id: 2, email: "barry@starlabs.com" },
    { name: "Cisco", id: 3, email: "cisco@starlabs.com" },
    { name: "Roni", id: 4, email: "roni@starlabs.com" },
    { name: "Brad", id: 5, email: "brad@starlabs.com" }
];
console.log(user1);
console.log(user2);
console.log(restUsers);
// some functions
let result = restUsers.filter((user) => user.id > 3); // filtering array
console.log(result);
