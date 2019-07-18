// Logic Challenge - Mencari Modus
function cariModus(arr) {
  var result = [];
  var i = 0;
    
    for (i; i < arr.length; i++) {
      var x = arr[i];
      var j = 0;
        for (j; j < arr.length; j++) {
          var y = arr[j];
          if (i === j) {
          } else if (x === y) {
            result.push(x);
          }
        }
    }
    
    if (result.length === 0 || result.length > arr.length) {
      return -1;   
    } else if (result.length >= 2) {
      return result[0];
    }
    return result;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1