const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( /*arr*/ ) {
    throw new CustomError('Not implemented');
   /* let counter = 1;
    let result = [];
    const calculateDepth = (arr) => {
        for (const subArr of arr) {
          if (Array.isArray(subArr)) {
            counter += 1;
            calculateDepth(subArr);
          }
          result.push(counter);
          counter = 1;
        }
        return Math.max.apply(null, result);
    } 
    return calculateDepth;
    */
  }
};