//storing a person name in a variable
var personName = "Tayyaba arshad";
//printing a person name in a lowerrcase
console.log("Lowercase:", personName.toLowerCase());
//printing a person name in a uppercase
console.log("Uppercase:", personName.toUpperCase());
//printing a person name in a titlecase
// step 1
var naming = personName.split(" ");
// step 2
var titlecaseName = " ";
// step 3
for (var i = 0; i < naming.length; i++) {
    titlecaseName += naming[i].charAt(0).toUpperCase() + naming[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
