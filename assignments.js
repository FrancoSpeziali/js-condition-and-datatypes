/*

    Assignment 1

    Update the function below to return a value of type "number"

*/

function assignment1() {
}

/*

    Assignment 2

    Update the function below to return a value of type "string"

*/

function assignment2() {
}

/*

    Assignment 3

    Update the function below to return a value of type "boolean"

*/

function assignment3() {
}

/*

    Assignment 4

    Update the function below to return a value of type "object"

*/

function assignment4() {
}

/*

    Assignment 5

    Update the function below to return an object with the properties "name" and "id"

*/

function assignment5() {
}

/*

    Assignment 6

    Update the function below to return a function

*/

function assignment6() {
}

/*

    Assignment 7

    1. Update the function below to accept one argument "name"

    2. Update the function below to return the argument "name"

*/

function assignment7() {
}

/*

    Assignment 8

    1. Update the function below to accept 2 arguments called "firstName" and "lastName".

    2. Update the function below to return a joined string of "firstName lastName". Including

    the space in between.

    Example: I call the function like so:

    assignment8("John", "Coltrane");

    I expect the result:

    "John Coltrane"

*/

function assignment8() {
}

/*

    Assignment 9

    1. Update the function below to accept an argument "number"

    2. Update the function so that if the argument "number" is equal to 50,

    the function returns the boolean TRUE

    Otherwise, return FALSE

*/

function assignment9() {
}

/*

    Assignment 10

    1. Update the function below to accept 2 arguments "number1" and "number2"

    2. Update the function to return the boolean TRUE if "number2" is greater than "number1"

    Otherwise, return FALSE

*/

function assignment10() {
}

/*

    Assignment 11

    1. Update the function below to accept 2 arguments "number1" and "number2"

    2. Update the function to return the boolean TRUE if "number2" is less than "number1"

    Otherwise, return FALSE

*/

function assignment11() {
}

/*

    Assignment 12

    1. Update the function below to accept 2 arguments "number1" and "number2"

    2. Update the function to return the boolean TRUE if "number2" is greater or equal to "number1"

    Otherwise, return FALSE

*/

function assignment12() {
}

/*

    Assignment 13

    1. Update the function below to accept 1 argument "value1"

    2. Update the function to return the boolean TRUE if typeof "value1" is equal to "string"

    Otherwise, return FALSE

*/

function assignment13() {
}

/*

    Assignment 14

    1. Update the function below to accept 2 arguments "value1" and "value2"

    2. Update the function to return the boolean TRUE if

    typeof "value1" is equal to "string" AND typeof "value2" is equal to "string"

    Otherwise, return FALSE

*/

function assignment14() {
}

/*

    Assignment 15

    1. Update the function below to accept 1 argument "value1"

    2. Update the function to return the boolean TRUE if typeof "value1" is NOT equal to "string"

    Otherwise, return FALSE

*/

function assignment15() {
}

/*

    Assignment 16

    1. Update the function below to accept 1 argument "value1"

    2. Update the function to return the boolean TRUE if

    typeof "value1" is equal to "string" OR typeof "value1" is equal to "number"

    Otherwise, return FALSE

*/

function assignment16() {
}

/*

    DO NOT EDIT THE CODE BELOW THIS LINE!

*/

const colors = require("colors");

const results = [
    { result: assignment1(), validate: (result) => typeof result === "number" },
    { result: assignment2(), validate: (result) => typeof result === "string" },
    { result: assignment3(), validate: (result) => typeof result === "boolean" },
    { result: assignment4(), validate: (result) => typeof result === "object" },
    { result: assignment5(), validate: (result) => typeof result === "object" && result.name && result.id },
    { result: assignment6(), validate: (result) => typeof result === "function" },
    { result: assignment7, validate: (result) => result("John") === "John" },
    { result: assignment8, validate: (result) => result("John", "Coltrane") === "John Coltrane" },
    { result: assignment9, validate: (result) => result(50) === true && result(23) === false },
    { result: assignment10, validate: (result) => result(50, 51) === true && result(50, 50) === false },
    { result: assignment11, validate: (result) => result(50, 49) === true && result(50, 50) === false },
    { result: assignment12, validate: (result) => result(50, 50) === true && result(50, 49) === false },
    { result: assignment13, validate: (result) => result("hello") === true && result(62) === false },
    { result: assignment14, validate: (result) => result("hello", "rain") === true && result("hello", 34) === false },
    { result: assignment15, validate: (result) => result("hello") === false && result(65) === true },
    { result: assignment16, validate: (result) => result("hello") === true && result(44) === true && result(true) === false }
];

for(let assignmentIndex = 0; assignmentIndex < results.length; assignmentIndex += 1) {
    const assignment = results[assignmentIndex];

    console.log(`\nAssignment ${assignmentIndex + 1}`)

    if (typeof assignment.result !== "function") {
        console.log("\n\tResult: ", `<${assignment.result}>`);
    }


    if(typeof assignment.result === 'string') {
        assignment.result = assignment.result.trim();
    }

    if(assignment.validate(assignment.result)) {
        console.log("\n\tComplete! ".green, "Congratulations!!".rainbow);
    } else {
        console.log("\n\tIncomplete".underline.red);
    }
}
