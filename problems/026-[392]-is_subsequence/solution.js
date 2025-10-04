/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = function(s, t) {
  if (s == t) return true;

  let sIdx = 0;
  let tIdx = 0;
  while (tIdx < t.length) {
    if (t[tIdx] === s[sIdx]) sIdx++;
    if (sIdx >= s.length) return true;
    tIdx++;
  }

  if (sIdx >= s.length) return true;
  return false;
};

console.log('CASE 1:');
const testSubsequence1 = "abc";
const testString1 = "ahbgdc"
console.log(isSubsequence(testSubsequence1, testString1));

console.log('CASE 2:');
const testSubsequence2 = "axc";
const testString2 = "ahbgdc"
console.log(isSubsequence(testSubsequence2, testString2));

console.log('CASE 3:');
const testSubsequence3 = "bb";
const testString3 = "ahbgdc"
console.log(isSubsequence(testSubsequence3, testString3));
