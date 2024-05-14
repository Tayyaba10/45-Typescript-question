"use strict";
//New guest invited to dinner because more space available
//Define a name in array
let guestList = ["Malaika", "Bisma", "Hamna"];
// Print message
console.log(`Great news! we found a bigger dinner table.`);
// Add a new guest in the begining of array
guestList.unshift("Farida");
// Add a guest in middle of array
guestList.splice(Math.floor(guestList.length / 2), 0, "Areesha");
// Push a guest in the end of array
guestList.push("Mehak");
console.log(guestList);
//Print a message to each person
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
