function hasDuplicate(array) {
    return new Set(array).size !== array.length;
}


function vowelCount(string) {
    const vowelMap = new Map();
    const vowels = [...'aeiou'];
    for (let char of string.toLowerCase()) {
        if (vowels.includes(char)) {
            if (vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1);
            } else {
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
}