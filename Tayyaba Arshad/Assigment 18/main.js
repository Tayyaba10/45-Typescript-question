"use strict";
// five places to visit
// store location in array
let placesVisit = ["saudi arabia", "china", "indonesia", "dubai", "japan"];
// print place in its original order
console.log("Original order:", placesVisit);
// Print array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", placesVisit.slice().sort());
// Show that array is still in its original order by printing it
console.log("Original order:", placesVisit);
// Print array in reverse alphabetical order without changing the order of the original list
console.log("Reverse order:", placesVisit.slice().sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Original order:", placesVisit);
// Reverse the order of list.Print the array to show that its order has changed.
console.log("Reverse order:");
placesVisit.reverse();
console.log(placesVisit);
// Reverse the order of list again. Print the list to show it’s back to its original order.
console.log("Reverse order changed:");
placesVisit.reverse();
console.log(placesVisit);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical order:", placesVisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetical order:", placesVisit.sort().reverse());
console.log(placesVisit);
