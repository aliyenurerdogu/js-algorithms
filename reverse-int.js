reverseInt = (num) => {
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num);
    //Math.sign(num) returns 1 for positive numbers and -1 for negative numbers.
}
console.log(reverseInt(38));