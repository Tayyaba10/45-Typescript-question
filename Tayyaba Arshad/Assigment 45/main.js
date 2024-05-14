"use strict";
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// define a function 
function myCar(manufacturer, modelname, ...extraoption) {
    const carInfo = Object.assign({ manufacturer,
        modelname }, Object.assign({}, ...extraoption));
    return carInfo;
}
// call the function
let yourCar = myCar("Honda", "Civic", { colour: "white" }, { features: ["power window", "stairing"] });
//print variable
console.log(yourCar);
