// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
//  to see that the list has actually been modified.


let magician1=["Ayaan" ,"Mogambo" ,"Joji"]
function show_magicians1(magician){
for (let a=0; a<magician.length ; a++){
    console.log(magician[a])
}
}

show_magicians1(magician1)

function make_great(magician1){
    for (let a=0; a<magician1.length ; a++){
        magician1[a] = `The Great ${magician1[a]}`;

}
}
make_great(magician1);
console.log(magician1);

