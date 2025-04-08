palindrome = (str) => {

    // let reversed = str.split('').reverse().join('');
    // return str === reversed;

    //two-pointer technique
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(palindrome("madam"));
console.log(palindrome("hello"));
console.log(palindrome("kayak"));
