// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//   Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added 
//   to each magician’s name.


let magician2 = ["Ayaan", "Mogambo", "Joji"];

function show_magicians2(magician) {
    for (let a = 0; a < magician.length; a++) {
        console.log(magician[a]);
    }
}

show_magicians2(magician2);

function make_great1(magician2) {
    var mag = [];
    for (var magician of magician2) {
        mag.push("The Great " + magician);
    }
    return mag; // Return the modified array
}

let greatMagicians = make_great1(magician2); // Capture the returned array
console.log(greatMagicians); // Print the modified array
console.log(magician2); // Original array remains unchanged
