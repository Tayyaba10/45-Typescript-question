"use strict";
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// create the name of animals
let animalsName = ["cow", "cat", "rabbit"];
console.log("Name of animals:");
// using for-loop print a statement of each animals
for (let animals of animalsName) {
    console.log(`A ${animals} would make a great pet.`);
    console.log("These animals would make a great pet!");
}
//add one line and print outside the for loop
console.log("These creatures have a common characteristic: sensory organs.");
