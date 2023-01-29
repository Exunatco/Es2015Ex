function filterOutOdds(...nums) {
    return nums.filter((numbers) => numbers % 2 === 0);
}

function findMin(...numbers) {
    return Math.min(...numbers);
}

function mergeObjects(obj1, obj2) {
    return ({ ...obj1, ...obj2 });
}

function doubleAndReturnArgs(arr, ...numbers) {
    const double = numbers.map(num => num * 2);
    return [...arr, ...double];
    // return [...arr, ...numbers.map(v => v *2)]
}

function removeRandom(...items) {
    const randomIndex = Math.floor(Math.random() * items.length + 1);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
}

function extend(array1, array2) {
    return [...array1, ...array2];
}

function addKeyVal(obj, key, val) {
    return { ...obj, [key]: val };
    // const addKeyVal = { ...obj, [key]: val };
    // return addKeyVal;
}

function removeKey(obj, key) {
    let newObj = { ...obj }
    delete newObj[key];
    return newObj;
    // for (let item in obj) {
    //     if (item === key) {
    //         delete obj[item];
    //         return obj;
    //     }
    // }
}

function combine(obj1, obj2) {
    return ({ ...obj1, ...obj2 })
}

function update(obj, key, val) {
    return ({ ...obj, [key]: val })
}


const keyTest = addKeyVal(
    { Test: 1, Test2: 2 }, 'name', 'Poe');
const double = doubleAndReturnArgs([5, 10, 15], 5, 15);
const removed = removeKey({ name: 'Poe', age: '6', cute: true }, 'age');