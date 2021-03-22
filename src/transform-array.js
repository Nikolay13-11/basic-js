const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  const a = '--discard-next';
  const b = '--discard-prev';
  const c = '--double-next';
  const d = '--double-prev';


  if (!Array.isArray(arr)){
    throw new Error() ;
  } else if (arr.length == 0){
    return [];
  }
  else if (arr.includes(a)){
    arr.splice(arr.indexOf(a), 2);
    return arr;
  }else if (arr.includes(b)){
    arr.splice(arr.indexOf(b) -1, 2);
    return arr;
  }  else if (arr.includes(c)){
    arr.splice(arr.indexOf(c), 2, arr[arr.indexOf(a) + 1]);
    return arr;
    return arr;
  }else if (arr.includes(d)){
    arr.splice(arr.indexOf(d), 1, arr[arr.indexOf(a) - 1]);
    return arr;
  } else {
    return false;
  }



}


//throw new CustomError('Not implemented');
  // remove line with error and write your code here