// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


// let usernames = ["Ayaan" ,"Fatima", "Iqra" , "Shanzay" , "Admin"]
let usernames = []

if (usernames.length===0){
console.log(` We need to find some users!`)
}
else {
for (let a=0 ; a<usernames.length ; a++){

    if (usernames [a]==="Admin"){
        console.log(`Hello Admin , would you like to see the report?`)
    }
  else  {
        console.log(`Hello , hope youre doing well`)
    }
    
}
}

