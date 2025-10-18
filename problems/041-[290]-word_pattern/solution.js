/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
export const wordPattern = function(pattern, s) {
  const strArray = s.split(' ');

  if (pattern.length !== strArray.length) return false;

  const usedLettersMap = new Array(128).fill(0);
  const usedWordsMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const currentWord = strArray[i];
    const currentLetter = pattern[i];

    if (!usedWordsMap.has(currentWord)) {
      usedWordsMap.set(currentWord, currentLetter);
    } else if (usedWordsMap.get(currentWord) !== currentLetter) {
      return false;
    }

    const mapIndex = pattern.charCodeAt(i);
    if (!usedLettersMap[mapIndex]) {
      usedLettersMap[mapIndex] = strArray[i];
    } else if (usedLettersMap[mapIndex] !== strArray[i]) {
      return false;
    }
  }

  return true;
};

console.log('CASE 1:');
const testPattern1 = "abba"
const testStr1 = "dog cat cat dog";
console.log(wordPattern(testPattern1, testStr1));
// Output: true

console.log('CASE 2:');
const testPattern2 = "abba"
const testStr2 = "dog cat cat fish";
console.log(wordPattern(testPattern2, testStr2));
// Output: false

console.log('CASE 3:');
const testPattern3 = "aaaa"
const testStr3 = "dog cat cat dog";
console.log(wordPattern(testPattern3, testStr3));
// Output: false

console.log('CASE 4:');
const testPattern4 = "abba"
const testStr4 = "dog dog dog dog";
console.log(wordPattern(testPattern4, testStr4));
// Output: false

console.log('CASE 5:');
const testPattern5 = "abba"
const testStr5 = "dog constructor constructor dog";
console.log(wordPattern(testPattern5, testStr5));
// Output: true
