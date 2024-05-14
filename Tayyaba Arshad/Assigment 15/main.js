"use strict";
// Changing of the guest list
let guestList = ["Malaika", "Bisma", "bushra", "Hamna"];
// Print the name who cannot make dinner
let unableAttends = guestList.splice(2, 1)[0];
console.log(`${unableAttends}, you are not invited to dinner.`);
//Replace a guest
guestList.push("farida");
//Print amessage
guestList.forEach(names => {
    console.log(`Dear ${names} ,i want to invite you to my house for dinner.`);
});
