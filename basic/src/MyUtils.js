
// These are silly examples to test the basics.
// The target browser is IE 11 so it is quite lame in terms of syntax.

function ifEven(i, callback) {
  if (i % 2 === 0) {
    callback(i);
  }
}

function ifOdd(i) {
  if (i % 2 !== 0) {
    oddCallback(i);
  }
}

function isPalindrome(s) {
  let result = true;

  let index = 0;
  let maxIndex = s.length - 1;
  let reverseIndex = maxIndex;
  let isDone = false;

  while (! isDone) {
    let charA = s[index];
    let charB = s[reverseIndex];

    if (charA !== charB) {
      result = false;
    } 

    isDone = (index === maxIndex) || (reverseIndex === 0);
    index++;
    reverseIndex--;
  }

  return result;
}
