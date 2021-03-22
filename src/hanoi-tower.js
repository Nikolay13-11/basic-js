const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
 var object = {};
 
 object.turns = Math.floor((2 ** disksNumber) - 1);
 object.seconds = Math.floor((3600/turnsSpeed) * object.turns);

return object;
};
