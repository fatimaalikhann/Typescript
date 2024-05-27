// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found
// a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
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
//Name.splice (2 ,0, "Bilal")
Name.push("Ali");
console.log(Name);
for (var a = 0; a < Name.length; a++) {
    console.log(Name[a] + " would you like to join us for dinner today?");
}

