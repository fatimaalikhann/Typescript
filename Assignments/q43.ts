// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that
//  collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the 
//  function three times, using a different number of arguments each time.


function sandwich (...item:string[]){
for(let items of item){
console.log(items);
}
}
sandwich("Bread","Cheese","Chicken","Tomato","Mustard Sauce");
sandwich("Bread","Cheese","Chicken");
sandwich("Bread","Cheese","Chicken","Tomato");
