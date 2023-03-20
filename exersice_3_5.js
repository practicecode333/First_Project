"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Practice exercise 3.5
Create an object named people that contains an empty array that is called
friends.

2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.

3. Add the three friends to the friend array.

4. Output it to the console.


*/
let people = { friends: [] };
let friend1 = {
    firstName: "Ali",
    lastName: "Ahmad",
    Id: 3344
};
let friend2 = {
    firstName: "Faizan",
    lastName: "Ali",
    Id: 32343
};
let friend3 = {
    firstName: "Ariba",
    lastName: "Noor",
    Id: 3334322
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
