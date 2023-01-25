// function double(arr) {
//     return arr.map(function(val){    BORING WAY
//         return val * 2;
//     })
// }

const double = (arr) => arr.map((val) => val * 2); //COOL WAY

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num) {
//         return num ** 2;
//     })
//     var evens = squares.filter(function(square) {  NON ARROW WAY
//         return square % 2 === 0; 
//     });
//     return evens;
// }

const squareAndFindEvens = (numbers) => {
    const squareAndEven = numbers.map((num) => {
        return num ** 2
    })                                             //Experimenting
        .filter((square) => {
            return square % 2 === 0
        })
    return squareAndEven
};

// const squareAndFindEvens = numbers => {
//     const squares = numbers.map(num => num ** 2);
//     const evens = squares.filter(square => square % 2 === 0); //Isolating each works.
//     return evens;
// }