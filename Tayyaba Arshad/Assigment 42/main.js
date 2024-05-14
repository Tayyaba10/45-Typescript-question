"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//define a magician name in a array
let magicianName = ["Harry Houdini", "David Copperfield", "David Batine"];
//write a function to show_magician name
function show_magicians(magicians) {
    magicians.forEach(names => {
        console.log(names);
    });
}
//function to make a magician great through for loop method
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magicianName[i] = " The Great " + magician[i];
    }
}
//call the function
make_great(magicianName);
show_magicians(magicianName);
