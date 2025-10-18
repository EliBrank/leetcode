/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const alphabetMap = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    alphabetMap[s.charCodeAt(i) - 97]++;
    alphabetMap[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < 26; i++) {
    if (alphabetMap[i] !== 0) return false;
  }

  return true;
};

console.log('CASE 1:');
const testSStr1 = "anagram";
const testTStr1 = "nagaram";
console.log(isAnagram(testSStr1, testTStr1));
// Output: true

console.log('CASE 2:');
const testSStr2 = "rat";
const testTStr2 = "car";
console.log(isAnagram(testSStr2, testTStr2));
// Output: false
