//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//make a array of names with function 
function show_magicians(magician: string[]) {
    magician.forEach(name => {
        console.log(name);
        
    });
}

// define a array of megician name 
let megicianName = ["Harry Houdini", "David Copperfield", "David Batine"]

//print a name of megician 
show_magicians(megicianName)


