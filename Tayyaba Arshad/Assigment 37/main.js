"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//write a function
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`The ${size} size shirt with written ${message} printed shirt.`);
}
//call the function
make_shirt();
//call the function a medium size with the default message
make_shirt("medium");
////call the function a small size with the default message
make_shirt("small");
