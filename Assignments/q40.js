// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
var magician = ["Ayaan", "Mogambo", "Joji"];
function show_magicians(magician) {
    for (var a = 0; a < magician.length; a++) {
        console.log(magician[a]);
    }
}
show_magicians(magician);
