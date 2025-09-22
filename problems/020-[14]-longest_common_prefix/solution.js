/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function(strs) {
  let commonPrefix = strs[0];

  for (const str of strs) {
    const maxWordLength = Math.max(commonPrefix.length, str.length);
    for (let i = 1; i < maxWordLength; i++) {
      if (commonPrefix[i] !== str[i]) {
        commonPrefix = commonPrefix.slice(0, i);
        break;
      }
    }

    if (commonPrefix === '') break;
  }

  return commonPrefix;
};

console.log('CASE 1:');
const testStrings1 = ["flower","flow","flight"];
console.log(longestCommonPrefix(testStrings1));

console.log('CASE 2:');
const testStrings2 = ["dog","racecar","car"];
console.log(longestCommonPrefix(testStrings2));
