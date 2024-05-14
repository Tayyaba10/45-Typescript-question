//storing a person name in a variable

let personName:string ="Tayyaba arshad";

//printing a person name in a lowerrcase

console.log("Lowercase:", personName.toLowerCase());

//printing a person name in a uppercase

console.log("Uppercase:", personName.toUpperCase());

//printing a person name in a titlecase
// step 1
let naming:string[] = personName.split(" ");
// step 2
let titlecaseName: string = " "
// step 3
for (let i = 0; i < naming.length; i++) {
    titlecaseName +=naming[i].charAt(0).toUpperCase()+naming [i].slice(1).toLowerCase()+ " "
    
}
console.log(titlecaseName);