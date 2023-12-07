/*
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/

function reverseString(str) {
  str = str.split('');
  str = str.reverse();
  str = str.join("");
  return str;
}

reverseString("hello");
