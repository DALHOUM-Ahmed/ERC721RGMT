// let s = 0;
// function printAllKLength(set, k) {
//   let n = set.length;
//   printAllKLengthRec(set, "", n, k);
// }

// function printAllKLengthRec(set, prefix, n, k) {
//   if (k == 0) {
//     console.log(prefix.split(""));
//     s++;
//     return;
//   }

//   for (let i = 0; i < n; ++i) {
//     let newPrefix = prefix + set[i];
//     printAllKLengthRec(set, newPrefix, n, k - 1);
//   }
// }

// console.log("************Combinations test*************");
// let set = ["1", "2", "3"];
// for (let k = 1; k <= 3; k++) printAllKLength(set, k);
// console.log("tested combinations", s);

function price(combination) {
  let _price = 0;
  for (let i = 0; i < combination.length; i++) {
    if (combination[i] == "1") _price += 1;
    if (combination[i] == "2") _price += 2;
    if (combination[i] == "3") _price += 3;
  }
  return _price;
}

console.log(price([3, 3, 1]));
