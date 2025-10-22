/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagrams = function(strs) {
  const anagramMap = new Map();
  const res = [];

  for (const str of strs) {
    const letterFreqStr = letterFreqEncoder(str);

    if (!anagramMap.has(letterFreqStr)) {
      anagramMap.set(letterFreqStr, []);
    }
    anagramMap.get(letterFreqStr).push(str)
  }

  for (const anagramArr of anagramMap.values()) res.push(anagramArr);

  return res;
};

function letterFreqEncoder(str) {
  const alphabetMap = Array(26).fill(0);
  const encodedArr = [];

  for (let i = 0; i < str.length; i++) {
    alphabetMap[str.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if (alphabetMap[i] > 0) {
      const currentLetter = String.fromCharCode(i + 97);
      encodedArr.push(currentLetter + alphabetMap[i])
    }
  }

  return encodedArr.join('');
};

console.log('CASE 1:');
const testStrs1 = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(testStrs1));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log('CASE 2:');
const testStrs2 = [''];
console.log(groupAnagrams(testStrs2));
// Output: [['']]

console.log('CASE 3:');
const testStrs3 = ['a'];
console.log(groupAnagrams(testStrs3));
// Output: [['a']]
//
console.log('CASE 4:');
const testStrs4 = ['',''];
console.log(groupAnagrams(testStrs4));
// Output: [['','']]
