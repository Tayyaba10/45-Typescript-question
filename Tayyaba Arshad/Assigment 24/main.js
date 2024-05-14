"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let userName = 'tayyaba';
// Tests for equality and inequality with strings
console.log("Is userName == 'tayyaba'? I predict True. ");
console.log(userName == 'tayyaba');
console.log("Is userName != 'tayyaba'? I predict False.");
console.log(userName != 'tayyaba');
// Tests using the lower case function
console.log("Is userName == userName.toLowerCase()? I predict True.");
console.log(userName == userName.toLowerCase());
userName = "Tayyaba";
console.log("Is userName == userName.toLowerCase()? I predict False.");
console.log(userName == userName.toLowerCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 7;
console.log("Is num == 4? I predict False.");
console.log(num == 4);
console.log("Is num != 4? I predict True.");
console.log(num != 4);
// greater than and less than,
console.log("Is num > 4? I predict True.");
console.log(num > 4);
console.log("Is num < 4? I predict False.");
console.log(num < 4);
//greater than or equal to
console.log("Is num >= 4? I predict True.");
console.log(num >= 4);
//less than or equal to
console.log("Is num <= 4? I predict False.");
console.log(num <= 4);
// Tests using "and" and "or" operators
console.log("Is num <= 4 && num > 4? I predict False.");
console.log(num <= 4 && num > 4);
console.log("Is num <= 4 || num > 4? I predict True.");
console.log(num <= 4 || num > 4);
// Test whether an item is in a array
let number = [3, 8, 9.2];
console.log("Is number.include(3)? I predict True");
console.log(number.includes(3));
// Test whether an item is not in a array
console.log("Is number.include(11)? I predict False");
console.log(number.includes(11));
