// Deel 1
for (let numbers = 0; numbers <= 100; numbers ++) {
    if (numbers % 3 == 0) {
        console.log("Fizz");
    } else if ( numbers % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log( numbers);
    }
}


// Deel 2
for (let numbers = 0; numbers <= 100; numbers ++) {
    if (numbers % 3 == 0 && numbers % 5 == 0) {
        console.log("FizzBuzz");
    } else if (numbers % 3 == 0) {
        console.log("Fizz");
    } else if ( numbers % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log( numbers);
    }
}
