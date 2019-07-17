// Logic Challenge - Digit Perkalian Minimum
function digitPerkalianMinimum(angka) {
    var hasil = [];
    for (var i = 0; i <= angka; i++) {
      for (var j = 0; j <= angka; j++) {
        if (i * j === angka) {
          var gabungan = String(i).length + String(j).length;
          hasil.push(gabungan);
        }
      }
    }
    hasil.sort();
    return hasil[0];
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2