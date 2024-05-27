// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will 
// need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var currentUser = ["Ayaan", "Ali", "Areesh", "Fatimah", "Sara", "Anusha"];
var newUser = ["Ayaan", "Fatimah", "Hussain", "Iqbal"];
for (var a = 0; a < newUser.length; a++) {
    var isAvailable = true;
    for (var b = 0; b < currentUser.length; b++) {
        if (newUser[a].toLowerCase() === currentUser[b].toLocaleLowerCase()) {
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log("The UserName ".concat(newUser[a], " is Available"));
    }
    else {
        console.log("The userName ".concat(newUser[a], " has Alrady been Used. Please Enter New UserName"));
    }
}
