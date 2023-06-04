// Basics of JavaScript

/*
Hey Jimbo, Look at my multiline comment!
Let's put it on the fridge
Primitive data types in JS: strings, integers, Booleans, floats, arrays, objects (very similar to Python dictionaries)
Functions in JS
Loops
Scripting vs Programming Language
*/

// String variables

var first_name = 'Tugce'

// Display the value in JavaScript
console.log(first_name)

// Assign an integer
var some_number = 33;
console.log(some_number)

// Show all attributes of a document or id
console.dir(document)

// Floats
var some_float = 3.14
console.log(some_float)

// Array
var some_array = [1,2,3,4];
console.log(some_array)

var some_objects = {'Yee' : 'haw'};
console.log(some_objects)

// javascript hoisting

a_num = 10
console.log(a_num)
var a_num
console.log(a_num)

console.log(some_random_variable) // Still runs but returns Undefined which is basically a 'None Type'; Not a good practice
var some_random_variable = 'this is a random variable'
console.log(some_random_variable)

// A better way declaring a variable is by using 'let' or 'const' keywords

let x
console.log(x)
x = 3
console.log(x)

// const y = 5;
// console.log(y)
// y = 6;
// console.log(y)

// Basic math operations

// Addition
let sum = 5 + 5
console.log(sum)

// Substraction
// let diff = 5 - 4

let diff_1 = 5
let diff_2 = 4
console.log(diff_1 - diff_2)

// Multiplication and division same as Python, exponents as well

// Some other math operations
// Finding the Floor of a decimal

let find_floor = Math.floor(5.8)
console.log(find_floor)

// Alternatively, Math.ceil(n) brings back the ceiling

//Mind Bender
let crazy_stuff = some_float + '4' // Because this is a string concatenating string to a variable 4 to the end.
console.log(crazy_stuff)

//Mind Bender 2
let crazy_stuff_2 = some_float + parseFloat('4')
console.log(crazy_stuff_2)

//Redeclaration of variables
var red_ranger = 'Jason'
var red_ranger = 'tommy'
console.log(red_ranger)

//Using the let keyword for the same
let nba_goat = 'Micheal Jordan'
console.log(nba_goat)

nba_goat = 'Kobe'
console.log(nba_goat)

//Dont retype let on later variable changes

//Regular named functions
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}

console.log(addNums())

let addNum2 = function(num, num2){
    return num + num2
}

console.log(addNum2(6,7))

// ES6+ Arrow function in JS
//Our first example shows how to use a single parameter in an arrow function without parentheses
// This can only be done with one parameter if you dont want to use parentheses

let cubed = num => {
    return num**3
}

// No params in an arrow function

let someFunc = () => {
    return 5
}

console.log(cubed(4))

// with parantheses 

let cubed2 = (num) => {
    return num**3
}

console.log(cubed2(4))

// If you have multiple parameters you must have parantheses around them
let toThePower = (num, power) => {
    return num**power
}
console.log(toThePower(4,3))



console.log(
    (function(name){
        let hello = 'Hello ' + name;
        return hello


    })
('Joel'))

//Control Flow
// if statements

function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(67))

// Ternary Operators

function determineAge2(age){
    return (age < 18) ? 'minor' : (age >= 18 && age && age <= 65) ? 'Adult not retired' : 'Elderly person not retired'
} 

console.log(determineAge2(62))

// LOOOOOOOOPS (start+stop+step)
function countByOne(){
    for(let i = 0 ; i < 20 ; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}
console.log(countByOne())

function decreaseByOne(){
    for(let i = 20; i > 0; i--)
        console.log(i)
}


console.log(decreaseByOne())

// def count_by_one():
//     for i in Range(0,20,1)
//         print(i)


// WHILE LOOOOOP

function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += `this number is...${i} \n`
        i++;
    };
    i++
}
console.log(count_with_while())

// Do While Loop
function countWithDoWhile(){
    let i = 0;
    let text = '';
    do {
        text += `this is a number...${i} \n`;
        i++
    }
    while(i < 10)
    return text
}

// Do while will run at least one time!!!

console.log(countWithDoWhile())

//create an array
let group_of_names = ['jerry', 'ben', 'bash', 'brock', 'misty']

// Index the first position
console.log(group_of_names[0])

let terry, ben, misty;
[terry, misty, ben] = group_of_names
console.log(terry, ben, misty)
console.log(group_of_names)
console.log(ben)

// Method 1 for looping through an array

function showAllNames(){
    for (let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'done'
}

console.log(showAllNames())

//Method 2
console.log(group_of_names.forEach(element => console.log(element)))

// JS Array method: array.toString()
console.log(group_of_names.toString())
console.log(typeof(group_of_names.toString()))

// More methods: map, filter, reduce

// .map()
let b_names = group_of_names.map( i => {
    if(i[0] == 'B'){
        return i
    } else {
        return false
    }
})

console.log(b_names)

//long form of .map()
let b_names_test = function (){
    let test_array = [];
    for(let i = 0; i < group_of_names.length; i ++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}

console.log(b_names_test())

// .filter()

let long_names = group_of_names.filter(element => element.length > 4)
console.log(long_names)

// .reduce()

const nums = [2,4,6,8,10]

let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
})
console.log(nums_reduced)

// You can also use methods like .join, .slice, .search, .splice

function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return "Counting has stopped"
}
console.log(decreaseByOne())

function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += `Text number is ...${i} \n`;
        i++;
    };
    return text;
}
console.log(count_with_while())

function countWithDoWhile(){
    let i = 0;
    let text = '';
    do{
        text += `This is text...${i} \n`;
        i++;
    }
    while(i < 10)
    return text
}

// do while will run at least one time!
console.log(countWithDoWhile())


//create an array
let group_of_people = ['jerry','ben','bash','brock','misty']
console.log(group_of_people[0])
//overridiiinnnnggg:
let coli,moli,joli;
[moli,joli,coli] = group_of_people
console.log(coli,moli,joli)
console.log(joli)

//Method 1 for looping through an array:

function ShowAllPeople(){
    for(let i = 0; i < group_of_people.length;i++){
        console.log(group_of_people[i])
    }
    return 'done'
}

console.log(ShowAllPeople())

//Method 2
console.log(group_of_people.forEach(i => console.log(i)))

//JS ARRAY METHOD:      array.ToString()
console.log(group_of_people.toString())
console.log(typeof(group_of_people.toString()))

//More Methods: .map() , .reduce() , .filter()

// .map()
let b_people = group_of_people.map(i => {
    if (i[0] == 'b'){
        return i
    }else {
        return false
    }
})
console.log(b_people)

                //long way of mapping:
// let b_people_test = function (){
//     let test_aray = [];
//     for(let i = 0; group_of_people.length; i++){
//         if(group_of_people[i][0] == 'b'){
//             test_aray.push(group_of_people[i])
//         }
//     }
//     return test_aray
// }
// console.log(b_people_test())


// .filter()
let length_of_names = group_of_people.filter(element => element.length > 4)
console.log(length_of_names)

// .reduce()
const numbers = [2,4,6,8,10]

let num_reduced = numbers.reduce((accumulator, current_numbers) => {
    return accumulator + current_numbers
})
console.log(num_reduced)
