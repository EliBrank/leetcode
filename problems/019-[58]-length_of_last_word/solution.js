/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord = function(s) {
  const wordArr = s.trim().split(' ');
  const lastIndex = wordArr.length - 1;

  return wordArr[lastIndex].length;
};
