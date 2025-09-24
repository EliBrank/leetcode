/**
 * @param {string} s
 * @return {string}
 */
export const reverseWords = function(s) {
  const wordArr = s.trim().replace(/\s+/g, ' ').split(' ');
  return wordArr.reverse().join(' ');
};

console.log('CASE 1:');
const testString1 = "the sky is blue";
console.log(reverseWords(testString1));

console.log('CASE 2:');
const testString2 = "  hello world  ";
console.log(reverseWords(testString2));

console.log('CASE 3:');
const testString3 = "a good   example";
console.log(reverseWords(testString3));
