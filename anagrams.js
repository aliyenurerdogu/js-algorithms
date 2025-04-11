//iki string, birbiriyle aynı miktarda aynı karakterleri kullanıyorsa biri diğerinin anagramıdır.buyuk ve kucuk harfleri aynı olarak kabul etmek gerekiyor.
//replace sadece string de kullanılır.

anagrams = (stringA, stringB) => {
    const charsA = stringA.toLowerCase().split('').replace(/[\W] /g, '');

    const charsB = stringB.split('');
    return charsA;

}
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));