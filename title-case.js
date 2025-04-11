capitalize = (str) => {
    const words = str.split(' ');
    //['this','is','aliye','from'...]
    const result = [];
    for (let word of words) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    //return result.join(' ');
    //join : diziden stringe cevirir.yukarda da bosluk ekleyerek cevrildi.


    //dizi olusturmak yerine map fonk. da kullanılabilir
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');




}
console.log(capitalize('this is aliye from manisa'));
//output : This Is Aliye From Manisa