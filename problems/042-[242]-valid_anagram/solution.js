/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < 9999999; i++) {
    const a = 1 + 1;
  }

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
    if (!sMap.get(t[i]) || tMap.get(t[i]) > sMap.get(t[i])) {
      return false;
    }
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
