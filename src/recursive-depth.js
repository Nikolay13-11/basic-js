const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, d = 0, a = 0 ) {
      if (Array.isArray(arr)){
      
      for(let i = 0; i < arr.length; i++){
      a = this.calculateDepth(arr[i])
      
      if(a > d){
      d = a;
      a = 0;
      }
      
      }
      return d + 1;
      
      } else {
      return 0;
      }
      
      

   
  }
};