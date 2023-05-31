// Continued control flow discussion from previous document

// Switch Case

let day = new Date().getDay();
let literal_day = new Date().toString();

console.log(day)
console.log(literal_day)


// Switch Case Statement Syntax
switch(day){
    case 0:
        console.log('Go to Church');
        break;
    case 1:
        console.log('Write code... it is Monday!')
        break;
    case 2:
        console.log('Test code... it is Tuesday!')
        break;
    case 3:
        console.log('It is Wednesday my dudes! ')
        break;
    case 4:
        console.log('Write a feature for a project on Thursday')
        break;
    case 5:
        console.log('Its Friday, friday, gotta get down on friday')
        break;
    case 6:
        console.log('Climb a mountain on Saturday')
        break;
    default:
        console.log(' we do not have a case for that')
}

// Creation of Objects in JS
// A Simple JS Objects

let person = {
    name:'John',
    age: 28,
    fav_color: 'Red'
}

// Accessing data in our Object
console.log(person['age']) // Bracket Notation
console.log(person.name) // Dot Notation

// Complex JS Object
let person2 = {
    name: "Max",
    age: 31,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'Blue,',
    teams: [{
        baseball: 'Chicago White Sox',
        football: 'Chicago Bears',
        hockey: 'Chicago Blackhawks',
        basketball:['Chicago Bulls', 'Chicago Sky'],
        soccer: ['Chicago Fire', 'Naperville Yellowjackets']

    },
    {
        baseball: 'Toronto Bluejays',
        football: 'LA Rams',
        basketball: 'Milwaukee Bucks',
        soccer: ['Manchester United', 'Liverpool']

    }

    ]
}

console.log(person2.prog_languages[2])
console.log(person2['prog_languages'][2][0])
console.log(person2.teams[1].soccer[0])

// JS Objects Prototype Methods -- Object Literal
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Sad Path of looping through objects in JS
for (let i = 0; i < person2.length; i ++){
    console.log(person2[i])
}

//Happy Path of looping through objects in JS -- LOOking for keys
for (let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

console.log('aaaaaughghgh')
// List Values from Person2 Object that are arrays
for (let i = 0; i < Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}

// Create our own Object prototypes -- using ES5 method syntax
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;


    // A Method inside of a JS Prototype
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year}, ${this.make},${this.model}, and has ${wheels} and the color is ${color}`);

        return 'Returned Value'
    }
}

// Creating an instance of a prototype
let my_car = new Car('Honda', 'CR-V', 2019)

// Call the prototype method
console.log(my_car.printInfo(4, 'Gun Metal'))

// JavaScript Classes

