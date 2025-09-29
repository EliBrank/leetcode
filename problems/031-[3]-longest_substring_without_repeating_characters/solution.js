/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function(s) {
  let l = 0;
  let r = 0;
  let max = 0;

  let subString = '';
  while (r < s.length) {
    if (subString.includes(s[r])) {
      l++;
    } else {
      r++;
    }
    max = Math.max(max, r - l);
    subString = s.slice(l, r);
  }

  return max;
};

console.log('CASE 1:');
const testString1 = "abcabcbb";
console.log(lengthOfLongestSubstring(testString1));

console.log('CASE 2:');
const testString2 = "bbbbb";
console.log(lengthOfLongestSubstring(testString2));

console.log('CASE 3:');
const testString3 = "pwwkew";
console.log(lengthOfLongestSubstring(testString3));
