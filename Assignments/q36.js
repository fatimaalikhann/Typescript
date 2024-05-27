function makeTshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("The Size Of The Tshirt Is ".concat(size));
    console.log("The Message printed On The Tshirt Is".concat(message));
}
makeTshirt("small");
makeTshirt("be cool");
makeTshirt();
