const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    throw new Error() ;
  }    
  decrypt() {
    throw new Error() ;
  }
}

module.exports = VigenereCipheringMachine;
