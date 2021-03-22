const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  var gh = Number(sampleActivity);
  if (typeof sampleActivity == 'string' && typeof gh == 'number' && sampleActivity != NaN && Math.sign(gh) == 1){
      var ln = Math.log(MODERN_ACTIVITY/sampleActivity);
     ln =  Math.ceil(ln/(0.693/HALF_LIFE_PERIOD));
  } else {
    return false;
  }
  if (Math.sign(ln) > 0){
    return ln;
  }else {
    return false;
  }
  }
