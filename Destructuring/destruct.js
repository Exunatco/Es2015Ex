// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

function getUserData({ firstName, favoriteColor = "green" }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }) // 'Your name is Alejandro and you like purple
getUserData({ firstName: "Melissa" }) // your name is Melissa and you like green
getUserData({}) // your name is undefined and you like green

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // 'Maya'
console.log(second); // 'Marisa'
console.log(third); // 'Chi'

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); // 'Raindrops on roses'
console.log(whiskers); // 'whiskers on kittens'
console.log(aFewOfMyFavoriteThings); // ['bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with string']

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

//   var a = obj.numbers.a;
//   var b = obj.numbers.b;
const { numbers: { a, b } } = obj;

var arr = [1, 2];
var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
[arr[0], arr[1]] = [arr[1], arr[0]]
console.log(arr);

// const raceResults = ([first, second, third, ...rest]) => {
//     return { first, second, third, rest }
// }

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest })