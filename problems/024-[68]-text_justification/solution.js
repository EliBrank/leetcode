/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
export const fullJustify = function(words, maxWidth) {
  let i = 0;
  const res = [];

  while (i < words.length) {
    let lineLength = 0;
    const line = [];

    while (i < words.length && (lineLength + line.length + words[i].length <= maxWidth)) {
      lineLength += words[i].length;
      line.push(words[i]);
      i++;
    }

    res.push(line);
  }

  for (i = 0; i < res.length; i++) {
    if (i === res.length - 1 || res[i].length === 1) {
      res[i] = calculateSpacing(res[i], maxWidth, true);
    } else {
      res[i] = calculateSpacing(res[i], maxWidth);
    }
  }

  return res;
};

const calculateSpacing = function(line, maxWidth, isLeftAlign = false) {
  const numGaps = line.length - 1;
  let availableSpace = maxWidth;
  for (const word of line) {
    availableSpace -= word.length;
  }
  // Use single spacing if left aligned
  const baseSpacing = isLeftAlign ? 1 : Math.floor(availableSpace / numGaps);
  // availableSpace will be used if left aligned, so ensure it accounts for single spacing
  if (isLeftAlign) availableSpace -= numGaps;

  // Initialize spacing values with baseSpacing
  const spacingArr = new Array(numGaps).fill(baseSpacing);

  // Additional space should be allocated to left-most gaps
  // Do not do additional processing to left-aligned lines
  if (!isLeftAlign) {
    for (let i = 0; i < (availableSpace % numGaps); i++) {
      spacingArr[i]++;
    }
  }

  const res = line.flatMap((word, index) => [word, ' '.repeat(spacingArr[index])]);
  if (isLeftAlign) res.push(' '.repeat(availableSpace));

  return res.join('');
}

console.log('CASE 1:');
const testWords1 = ["This", "is", "an", "example", "of", "text", "justification."];
const testMaxWidth1 = 16;
console.log(fullJustify(testWords1, testMaxWidth1));

console.log('CASE 2:');
const testWords2 = ["What","must","be","acknowledgment","shall","be"];
const testMaxWidth2 = 16;
console.log(fullJustify(testWords2, testMaxWidth2));

console.log('CASE 3:');
const testWords3 = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
const testMaxWidth3 = 20;
console.log(fullJustify(testWords3, testMaxWidth3));
