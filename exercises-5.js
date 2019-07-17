// Logic Challenge - Ubah Huruf
function ubahHuruf(kata) {
    var result = [];
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var arr = kata.split("");
    for (var i = 0; i < arr.length; i++){
      var positionAlphabet = alphabet.indexOf(arr[i]);
      var newPositionAlphabet = positionAlphabet + 1;
      var newHuruf = alphabet[newPositionAlphabet];
      result.push(newHuruf);
    }
    return result.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu