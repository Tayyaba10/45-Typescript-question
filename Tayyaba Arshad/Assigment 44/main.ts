//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//write a function

console.log("Making a sandwich");
console.log("Ingredients :");


function make_sandwich(...items:string[]) {
    items.forEach(item => {
        console.log(item);
        
    });
}

// call the function 3 times with different arguments

make_sandwich("bread","egg","chicken");

make_sandwich("salt","chicken spread", "butter","cheese")

make_sandwich("lettuce","mayo","black papper")

console.log("Enjoy your sandwich");
