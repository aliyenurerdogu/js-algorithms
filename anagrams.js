//iki string, birbiriyle aynı miktarda aynı karakterleri kullanıyorsa biri diğerinin anagramıdır.buyuk ve kucuk harfleri aynı olarak kabul etmek gerekiyor.
//replace sadece string de kullanılır.


//easier solution 
cleanStr = (str) => {
    return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
}
anagrams = (stringA, stringB) => {

    return cleanStr(stringA) === cleanStr(stringB);
    //bu kosullu ifade dogruysa true, yanlıssa false döner.

}



/*
charMap = (str) => {
    const charMap = {};
    str = str.toLowerCase().replace(/[\W]/g, '');
    // ters eğik slash ve buyuk w : tum ozel karakterlerle eşleşir.bosluk ve noktalama işaretleri gibi.
    for (let char of str) {
        charMap[char] = ++charMap[char] || 1;
    }
    return charMap;
}

anagrams = (stringA, stringB) => {
    //step 1: build char map for stringA
    const charmapA = charMap(stringA);

    //step 2: build char map for stringB
    const charmapB = charMap(stringB);

    //step 3: compare each character in the both the char maps
    if (Object.keys(charmapA).length !== Object.keys(charmapB).length) return false;

    for (let key in charmapA) {
        if (charmapA[key] !== charmapB[key]) return false;
    }
    return true;
}

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
*/