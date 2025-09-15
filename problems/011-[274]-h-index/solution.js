/**
 * @param {number[]} citations
 * @return {number}
 */
export const hIndex = function(citations) {
  const sortedCitations = citations.sort((a, b) => b - a);
  let maxH = 0;

  for (const [index, num] of sortedCitations.entries()) {
    if (num >= (index + 1)) {
      maxH = index + 1;
    } else {
      break;
    }
  }

  return maxH;
};


console.log('CASE 1:');

const testCitations1 = [3,0,6,1,5];
// sorted: [0,1,3,5,6]
console.log(hIndex(testCitations1));
// expected output: 3

console.log('CASE 2:');

const testCitations2 = [1,3,1]
// sorted: [1,1,3]
console.log(hIndex(testCitations2));
// expected output: 1
