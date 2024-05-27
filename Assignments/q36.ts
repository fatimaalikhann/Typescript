// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function makeTshirt(size: string = "large", message: string = "I Love TypeScript"){
        console.log(`The Size Of The Tshirt Is ${size}`)
        console.log(`The Message printed On The Tshirt Is${message}`)
    }

    makeTshirt("small")
    
    makeTshirt("be cool")
    
    makeTshirt()
    
