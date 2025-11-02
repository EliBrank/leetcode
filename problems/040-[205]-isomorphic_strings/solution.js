/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;

  const letterMap = Array(26).fill(0);
  const usedLettersSet = new Set();

  for (let i = 0; i < s.length; i++) {
    const letterIndex = s.charCodeAt(i) - 97;
    if (!letterMap[letterIndex] && !usedLettersSet.has(t[i])) {
      letterMap[letterIndex] = t[i];
      usedLettersSet.add(t[i]);
    } else if (letterMap[letterIndex] !== t[i]) {
      return false;
    }
  }

  return true;
};

console.log('CASE 1:');
const testSStr1 = "egg";
const testTStr1 = "add";
console.log(isIsomorphic(testSStr1, testTStr1));
// Output: true

console.log('CASE 2:');
const testSStr2 = "foo";
const testTStr2 = "bar";
console.log(isIsomorphic(testSStr2, testTStr2));
// Output: false

console.log('CASE 3:');
const testSStr3 = "paper";
const testTStr3 = "title";
console.log(isIsomorphic(testSStr3, testTStr3));
// Output: true

console.log('CASE 4:');
const testSStr4 = "badc";
const testTStr4 = "baba";
console.log(isIsomorphic(testSStr4, testTStr4));
// Output: false
