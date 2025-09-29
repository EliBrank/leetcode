/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export const strStr = function(haystack, needle) {
  // return haystack.indexOf(needle);
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const res = i;

      for (let j = 0; j < needle.length; j++) {
        if (haystack[i] !== needle[j]) {
          i -= j;
          break;
        }
        if (j >= needle.length - 1) return res;
        i++;
      }
    }
  }

  return -1;
}

console.log('CASE 1:');
const testString1 = "sadbutsad";
const testSearch1 = "sad";
console.log(strStr(testString1,testSearch1));

console.log('CASE 2:');
const testString2 = "leetcode";
const testSearch2 = "leeto";
console.log(strStr(testString2,testSearch2));

console.log('CASE 3:');
const testString3 = "mississippi";
const testSearch3 = "issip";
console.log(strStr(testString3,testSearch3));
