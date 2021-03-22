const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
   if (date == null){
    return 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) != '[object Date]') {
    throw new Error();
  } else {
    let months = ['winter', 'spring', 'summer', 'autumn'];
   let cdate = Math.floor((date.getMonth() + 1) % 12 / 3);
   return months[cdate];
  }

};
