// Logic Challenge - Tukar Besar Kecil
function tukarBesarKecil(kalimat) {
    var temp = "";
    for (var i = 0; i < kalimat.length; i++) {
          var word = kalimat[i]
          if (word === word.toUpperCase() ) {
            temp = temp + word.toLowerCase();
          } else if (word === word.toLowerCase() ) {
            temp = temp + word.toUpperCase();
          } else {
            temp = temp + word;
          }
        }
    return temp;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"