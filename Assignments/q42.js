// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//   Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added 
//   to each magician’s name.
var magician2 = ["Ayaan", "Mogambo", "Joji"];
function show_magicians2(magician) {
    for (var a = 0; a < magician.length; a++) {
        console.log(magician[a]);
    }
}
show_magicians2(magician2);
function make_great1(magician2) {
    var mag = [];
    for (var _i = 0, magician2_1 = magician2; _i < magician2_1.length; _i++) {
        var magician = magician2_1[_i];
        mag.push("The Great " + magician);
    }
    return mag; // Return the modified array
}
var greatMagicians = make_great1(magician2); // Capture the returned array
console.log(greatMagicians); // Print the modified array
console.log(magician2); // Original array remains unchanged
