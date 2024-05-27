// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
// write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var engine = "B48";
console.log("Is engine == B48? I predict True");
console.log(engine == "B48");
console.log("Is engine != B48? I predict False");
console.log(engine != "B48");
var ayaan = "Dog";
console.log(ayaan.toLowerCase() == "dog", "Is Dog in lowercase ,i predict true");
console.log(ayaan.toLowerCase() == "DOG", "Is Dog in lowercase ,i predict False");
var age = 30;
console.log("Is age <=30? i predict True");
console.log(age <= 30);
console.log("Is age >=40? i predict False");
console.log(age >= 40);
console.log(age <= 30 || engine == "B58", "i predict true");
console.log(age <= 30 && engine == "B58", "i predict false");
var fruit = ['Apple', 'Banana', 'Orange'];
console.log(fruit.indexOf('Banana') !== -1);
console.log(fruit.indexOf('PineApple') !== -1);
