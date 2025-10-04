/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
export const findSubstring = function(s, words) {
  const res = [];
  const wordLen = words[0].length;
  const wordCounts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  for (let offset = 0; offset < wordLen; offset++) {
    let l = offset;
    let localWordCounts = { ...wordCounts };
    let chainLength = 0;

    for (let r = offset; r <= s.length - wordLen; r += wordLen) {
      const word = s.slice(r, r + wordLen);

      // First check if word exists in wordCounts object
      // Decrement count in object and increment chain length
      if (word in localWordCounts) {
        localWordCounts[word]--;
        chainLength++;

        // Check wordCounts to make sure it is non-negative
        // Word can only appear as many times as it appears in words array
        while (localWordCounts[word] < 0) {
          const leftWord = s.slice(l, l + wordLen);
          localWordCounts[leftWord]++;
          chainLength--;
          l += wordLen;
        }

        // Substring found
        if (chainLength === words.length) {
          res.push(l);
          const leftWord = s.slice(l, l + wordLen);
          localWordCounts[leftWord]++;
          chainLength--;
          l += wordLen;
        }
      // Reset object if word is not in object and chain is broken
      } else {
        localWordCounts = { ...wordCounts };
        chainLength = 0;
        // Move l pointer to right of r
        l = r + wordLen;
      }
    }
  }

  return res;
};

console.log('CASE 1:');
const testInputString1 = "barfoothefoobarman";
const testWords1 = ["foo","bar"];
console.log(findSubstring(testInputString1, testWords1));

console.log('CASE 2:');
const testInputString2 = "wordgoodgoodgoodbestword";
const testWords2 = ["word","good","best","word","bestword"];
console.log(findSubstring(testInputString2, testWords2));

console.log('CASE 3:');
const testInputString3 = "barfoofoobarthefoobarman";
const testWords3 = ["bar","foo","the"];
console.log(findSubstring(testInputString3, testWords3));
