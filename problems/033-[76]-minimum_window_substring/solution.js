/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export const minWindow = function(parentStr, letters) {
  // parentStr can never contain everything in letters if it's shorter
  if (letters.length > parentStr.length) return '';
  if (parentStr === letters) return parentStr;

  const letterMap = {};

  for (const letter of letters) {
    letterMap[letter] = (letterMap[letter] || 0) + 1;
  }

  let l = 0;
  let windowMap = {};
  let matched = 0;
  // Calculate number of unique letters which need matches
  const requiredMatches = Object.keys(letterMap).length;

  let minWindowLen = Infinity;
  let minWindowStart = 0;

  for (let r = 0; r < parentStr.length; r++) {
    const rightChar = parentStr[r];

    if (letterMap[rightChar] !== undefined) {
      windowMap[rightChar] = (windowMap[rightChar] || 0) + 1;

      // Once threshold for character reached, increment matched
      if (windowMap[rightChar] === letterMap[rightChar]) matched++;
    }

    while (matched === requiredMatches) {
      const windowLen = r - l + 1;
      if (windowLen < minWindowLen) {
        minWindowLen = windowLen;
        minWindowStart = l;
      }

      const leftChar = parentStr[l];
      if (letterMap[leftChar] !== undefined) {
        // If leftChar is at threshold before decrement,
        // there will no longer be required number of matches
        if (windowMap[leftChar] === letterMap[leftChar]) matched--;
        windowMap[leftChar]--;
      }
      l++;
    }
  }

  if (minWindowLen === Infinity) return '';
  else return parentStr.substring(minWindowStart, minWindowStart + minWindowLen);
};

console.log('CASE 1:');
const testParentStr1 = 'ADOBECODEBANC';
const testLetters1 = 'ABC';
console.log(minWindow(testParentStr1, testLetters1));

console.log('CASE 2:');
const testParentStr2 = 'a';
const testLetters2 = 'a';
console.log(minWindow(testParentStr2, testLetters2));

console.log('CASE 3:');
const testParentStr3 = 'a';
const testLetters3 = 'aa';
console.log(minWindow(testParentStr3, testLetters3));

console.log('CASE 4:');
const testParentStr4 = 'ab';
const testLetters4 = 'b';
console.log(minWindow(testParentStr4, testLetters4));

console.log('CASE 5:');
const testParentStr5 = 'abc';
const testLetters5 = 'ac';
console.log(minWindow(testParentStr5, testLetters5));
