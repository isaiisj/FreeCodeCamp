function repeatStringNumTimes(str, num) {
  let s = "";
  for(let i = 0; i < num; i++){
    s += str;
  }
  //console.log(s);
  return s;
}

repeatStringNumTimes("abc", 3);
