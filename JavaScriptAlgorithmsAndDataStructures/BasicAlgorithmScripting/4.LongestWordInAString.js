/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let length = 0;
  for(let i in strArr){
     let x = strArr[i].length;
     if(length < x ){
       length = x;
     }
  }
  //console.log(length);
  return length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
