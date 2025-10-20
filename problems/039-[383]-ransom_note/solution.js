/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export const canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const availableLetters = Array(26).fill(0);

  for (let i = 0; i < magazine.length; i++) {
    const letterIndex = magazine.charCodeAt(i) - 97;
    availableLetters[letterIndex]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const letterIndex = ransomNote.charCodeAt(i) - 97;
    availableLetters[letterIndex]--;
    if (availableLetters[letterIndex] < 0) return false;
  }

  return true;
};

console.log('CASE 1:');
const testRansomNote1 = "a";
const testMagazine1 = "b";
console.log(canConstruct(testRansomNote1, testMagazine1));
// Output: false

console.log('CASE 2:');
const testRansomNote2 = "aa";
const testMagazine2 = "ab";
console.log(canConstruct(testRansomNote2, testMagazine2));
// Output: false

console.log('CASE 3:');
const testRansomNote3 = "aa";
const testMagazine3 = "aab";
console.log(canConstruct(testRansomNote3, testMagazine3));
// Output: true
