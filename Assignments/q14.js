// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating
// the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var Name = ["ayaan", "fatima", "iqra"];
console.log(Name[0] + " would you like  to join us for dinner today? ");
console.log(Name[1] + " would you like  to join us for dinner today? ");
console.log(Name[2] + " would you like  to join us for dinner today?");
//new assignment 
console.log("I am really sorry to tell you that " + Name[1] + " wont be able to join us for dinner ");
Name.splice(1, 1, "aiman");
console.log(Name);
for (var a = 0; a <= 2; a++) {
    console.log(Name[a] + " would you like to join us for dinner today?");
}
