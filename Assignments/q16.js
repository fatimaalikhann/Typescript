//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for 
//only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty
// list at the end of your program.
//question 15
var Name = ["ayaan", "fatima", "iqra"];
console.log("I am really sorry to tell you that " + Name[1] + " wont be able to join us for dinner ");
Name.splice(1, 1, "aiman");
console.log(Name);
for (var a = 0; a <= 2; a++) {
    console.log(Name[a] + " would you like to join us for dinner today?");
}
// new assignment 
console.log(" guys khana zyada hogeya hai ");
Name.unshift("Ahmed");
Name.splice(2, 0, "Bilal");
Name.push("Ali");
console.log(Name);
for (var a = 0; a < Name.length; a++) {
    console.log(Name[a] + " would you like to join us for dinner today?");
}
//question 16
console.log(" guys jagah kam parh gai hai, i can only have 2 guests for now");
while (Name.length > 2) {
    var popping = Name.pop();
    console.log("meri ap se vibe nae match hoti tou mei apko nae bolaongi sorry ".concat(popping));
}
console.log(Name);
for (var c = 0; c < Name.length; c++) {
    console.log("meri apse vibe match hoti hai ap asakte hain ", Name[c]);
}
for (var d = 0; d <= Name.length; d++) {
    Name.pop();
}
console.log(Name);
