// Logic Challenge - Shopping Time!
function shoppingTime(memberId, money) {
  var listItem = [["Sepatu brand Stacattu", 1500000], ["Baju brand Zoro", 500000], ["Baju brand H&N", 250000], ["Sweater brand Uniklooh", 175000], ["Casing Handphone", 50000]];
  var temp = [];
  var saveAll = {};
  var uang = money;
  for (var i = 0; i < listItem.length; i++) {
    if (uang >= listItem[i][1]) {
      uang -= listItem[i][1];
      temp.push(listItem[i][0]);
    }
    saveAll.memberId = memberId;
    saveAll.money = money;
    saveAll.listPurchased = temp;
    saveAll.changeMoney = uang;
    if (memberId === undefined || memberId === "") {
      return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } if (money < listItem[4][1]) {
      return "Mohon maaf, uang tidak cukup";
    }
  }
  return saveAll;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja