//Dinner guest

//Define a name in a array
let guestList: string[] = ["Malaika", "Bisma","Hamna"];

// print message
console.log(`unfortunately! the new dinner table won't arrive so we can invite only two guests.`);

guestList.unshift("Sana","Hadiqa");

// Print message updated list
console.log("updated guest list:", guestList);

//Remove guest from the list
while (guestList.length > 2) {
    let removeGuest: string | undefined = guestList.pop();
    if (removeGuest !== undefined) {
        console.log(`Sorry, ${removeGuest} we cant invite you`);
    }
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you both are invited for the dinner`)

});

//Remove the last two name in the guest list
guestList.splice(0,guestList.length)

// Empty guest list
console.log("updated guest list:",guestList);