const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
   return  this.getLength;
  },
  addLink(value) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
