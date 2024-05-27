// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that
//  collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the 
//  function three times, using a different number of arguments each time.
function sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    for (var _a = 0, item_1 = item; _a < item_1.length; _a++) {
        var items = item_1[_a];
        console.log(items);
    }
}
sandwich("Bread", "Cheese", "Chicken", "Tomato", "Mustard Sauce");
sandwich("Bread", "Cheese", "Chicken");
sandwich("Bread", "Cheese", "Chicken", "Tomato");
