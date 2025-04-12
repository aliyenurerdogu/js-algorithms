//a function that returns the number of vowels used in a string.vowels charachers: 'a', 'e', 'i', 'o', 'u' 
/*
vowels = (str) => {

    const matches = str.match(/[aeiou]/gi)
    //vowels karakterleri saglarken iki tane flag kullanmak gerekiyor.bunlardan biri olan g flag i bulunan ilk eşleşmede durmamayı saglar. i flag i ise buyuk/kucuk harfe duyarlı olmamak içindir.
    return matches ? matches.length : 0
}
*/



//second solution 
vowels = (str) => {
    const vowelCheck = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowelCheck.includes(char)) count++;
    }

    return count;
}

console.log(vowels('aliyenur erdogu'));
