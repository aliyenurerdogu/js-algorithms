//return the character that is most commonly used in the string

maxChar = (str) => {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    //array veya string arasında dongu yapmak için "of"
    for (let char of str) {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1;
        } else {
            charMap[char] = 1;
        }

        //if blogunun daha optimize hali
        charMap[char] = ++charMap[char] || 1;

    }

    //nesne arasında dongu yapmak için "in"
    for (let key in charMap) {
        if (charMap[key] > max) {
            max = charMap[key];
            maxChar = key;
        }
    }


    //another method
    for (const [key, value] of Object.entries(charMap)) {
        //console.log(key, value);
        if (value > max) {
            max = value;
            maxChar = key;
        }
    }
    return maxChar;
    //return charMap;
}
console.log(maxChar("abccccdee"));