/*
Repeat a given string str (first argument) for num 
times (second argument). Return an empty string if num 
is not a positive number. For the purpose of this challenge, 
do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  let s = "";
  for(let i = 0; i < num; i++){
    s += str;
  }
  //console.log(s);
  return s;
}

repeatStringNumTimes("abc", 3);
