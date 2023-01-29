// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName,
    };
}

// var favoriteNumber = 42;

// var instructor = {
//     firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

const instructor = (firstName, favoriteNumber) => {
    return {
        firstName,                                  //Dynamic favorite number and name
        [favoriteNumber]: "That is my favorite!"
    };
}

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

// const instructor2 = (firstName) => {
//     return {
//         firstName,
//         sayHi() {
//             return "Hi!";            //Dynamic first name.
//         },
//         sayBye() {
//             return `${firstName} says Bye!`;
//         }
//     }
// }

const instructor2 = {
    firstName: 'Jason',
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return `${this.firstName} says Bye!`;
    }
}

const createAnimal = (species, verb, noise) => {
    return {
        // species: species,
        species,  //Shares the same name as argument.
        [verb]() {
            return noise;
        }
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")