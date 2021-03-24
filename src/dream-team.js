const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!Array.isArray(members) || members.length == 0){
    return false;
  } else {
    let result = [];
    for (let i = 0; i < members.length; i++){
   if (typeof members[i] == 'string'){
     let a = members[i].replace(/\s/g, '');
    result.push(a.charAt(0).toUpperCase());}
  }
  return result = result.sort().join('').split();;
}
}


  


  

