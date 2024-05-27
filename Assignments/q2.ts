// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let PersonalName :string= "fatima ali"

console.log( "uppercase " + PersonalName.toUpperCase())
console.log("lowercase " + PersonalName.toLowerCase())
console.log("titlecase " + PersonalName.substring(0 ,1).toUpperCase() + PersonalName.substring(1 ,6).toLowerCase() + ` `
+ PersonalName.substring(7 , 8).toUpperCase() + PersonalName.substring(8).toLowerCase())
