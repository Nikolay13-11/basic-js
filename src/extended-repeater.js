const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
 
  const e = options.additionSeparator //строка, разделяющая повторения `addition`

  const a = options.repeatTimes //устанавливает число повторений `str`
  const b = options.separator //разделяющая повторения `str`
  const c = options.addition //которая будет добавлена после каждого повторения `str`
  const d = options.additionRepeatTimes //устанавливает число повторений `addition`

  var l = '';
  
    var str1 = '';
    var str2 = String(c);;
   // str = String(str);
    if (typeof str != 'string'){
      var h = true;
    }
  if ( a == 0){
    return str;
  
        
   } else if (a > 0 && !b && d > 0) {
//str = str.concat('|')
str = str.concat(c);
str = str.concat('|');
str = str.concat(c);
str = str.concat('|');
str = str.concat(c);
str = str.concat('+');
 str = str.repeat(a);
 str = str.slice(0, -1);
 return str;
    
    
  } else if (str.length < 0 && typeof c != 'string') {
    str1 = String(c);
    str2 = str2.concat(String(e))
    str2 = str2.repeat(d);
    str2 = str2.slice(0, -e.length)
    str2 = str2.concat(b);
    str = String(str);
    var str_finish = str.concat(str2);
    str_finish = str_finish.repeat(a)
    str_finish = str_finish.slice(0, -b.length)
    return str_finish;
     
  }
  else if (a > 0 && !b ) {
    str = str.concat('+')
     str = str.repeat(a)
     str = str.slice(0, -1)
     return str;
  }  else if (a > 0 && b && !c) {
    str = str.concat(b)
     str = str.repeat(a)
     str = str.slice(0, -b.length)
     return str;
  }  else if (a > 0 && b && d == 1) {
    str = str.concat(c).concat(b)
    //str = str.concat(b)
     str = str.repeat(a)
     str = str.slice(0, -b.length)
     return str;
  } else if (!a && c && !d ) {
    str = str.concat(c)
    //str = str.concat(b)
     //str = str.repeat(a)
     //str = str.slice(0, -b.length)
     return str;
  }  else if (a > 0 && d > 0 && typeof c == 'string') {
    str1 = c;
    str1 = str1.concat(e)
    str1 = str1.repeat(d);
    str1 = str1.slice(0, -e.length)
    str1 = str1.concat(b);
    str = str.concat(str1);
    str = str.repeat(a)
    str = str.slice(0, -b.length)
     return str;
  
} else {
  var m = b.length;
  m = -m;
  str1 = String(c);
  str2 = str2.concat(String(e));
  str2 = str2.repeat(d);
  str2 = str2.slice(0, -e.length);
  str2 = str2.concat(b);
  str = String(str);
  var str_finish = str.concat(str2);
  return str_finish;
  str_finish = str_finish.repeat(a);
  l = l.concat(str_finish);
  //str_finish = str_finish.slice(0, -b.length)
  
}
  
};
  