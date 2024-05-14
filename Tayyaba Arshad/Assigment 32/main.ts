//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

//Make a list of five or more usernames called current_users.
let current_users  = ["Sana","Hadiqa","Kiran","Malaika","Hamna"];

//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["Bisma","Farida","Hadiqa","Mehak","Malaika"];


//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not) {
new_users.forEach(userName => {

    let myCondition = current_users.some(current_users => current_users.toLowerCase() === userName.toLowerCase());
     
    if (myCondition) {
        console.log(`Sorry! The usernmae ${userName} is not available. Please write a different user name`);

    } else {
        console.log(`The user name ${userName} is available.`);
    }
});





