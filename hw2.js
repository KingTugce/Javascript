/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

function toCelc(f){
    return (f-32) * 5/9;
}

console.log(toCelc(212))









/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the users password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User {
    constructor(user, pass){
        this.user = user
        this.pass = pass
    }
    change_pass(pass, new_pass=pass){
        if (pass == this.pass){
            this.pass = new_pass
            return `thank you ${this.user}, your new pass is '${this.pass}'`
        }
    }
}
dan = new User('jimbo', 123)

console.log(dan.change_pass(123))









/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

function square(arr){
    let return_array = []
    for (let x of arr){
        if (x < 0){
            return_array.push(-(x**2))
        }
    }
    return return_array
}

console.log((square([-10, -3, 4, -2, 8, 9, -3])))






