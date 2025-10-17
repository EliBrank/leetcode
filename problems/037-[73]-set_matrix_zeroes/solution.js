/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const setZeroes = function(matrix) {
  const zeroedCols = new Set();
  const zeroedRows = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroedRows.add(i);
        zeroedCols.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (zeroedRows.has(i) || zeroedCols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

console.log('CASE 1:');
const testMatrix1 = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
];
console.log(setZeroes(testMatrix1));

console.log('CASE 2:');
const testMatrix2 = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
];
console.log(setZeroes(testMatrix2));
