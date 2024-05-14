//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//define a magician name in a array
let magicianName = ["Harry Houdini", "David Copperfield", "David Batine"];


//write a function magcian names
function show_magicians(magicians: string[]) {
    magicians.forEach(names => {
        console.log(names);
        
    });
    
}

//function to make a magician great through map
function make_great(magician: string[]) {
    return magician.map ((name => ` The Great ${name}`))
}


//Making a copy or original array
let copyMegaician = magicianName.slice();

//modify the copy array
let copy_great_magician = make_great(copyMegaician);

// call the function with show the array
//original array
show_magicians(magicianName);

// modified copy of array
show_magicians(copy_great_magician);






















