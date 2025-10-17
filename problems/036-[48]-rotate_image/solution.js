/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  const midIndex = Math.floor((matrix.length - 1) / 2);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= midIndex; j++) {
      const swapIndex = (matrix.length - 1) - j;
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][swapIndex];
      matrix[i][swapIndex] = temp;
    }
  }

  // return matrix;
};

console.log('CASE 1:');
const testMatrix1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
console.log(rotate(testMatrix1));
// Output: [[7,4,1],[8,5,2],[9,6,3]]

console.log('CASE 2:');
const testMatrix2 = [
  [5,1,9,11],
  [2,4,8,10],
  [13,3,6,7],
  [15,14,12,16]
];
console.log(rotate(testMatrix2));
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
