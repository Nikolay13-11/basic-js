const CustomError = require("../extensions/custom-error");

module.exports = function countCats(list) {
let cat = '^^';
let str = list.join();
arr = str.split(',');
let a = arr.filter(item => item == "^^");
return a.length;
};
