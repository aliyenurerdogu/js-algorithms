reverse = (str) => {
    // Using built-in methods
    return str.split('').reverse().join('');

    //long method
    // let reversed = '';
    // for (char of str) {
    //     reversed = char + reversed;
    // }

    // return reversed;
}
console.log(reverse('aliye'));
