/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const spiralOrder = function(matrix) {
  let yIndex = 0, xIndex = 0;
  const xMaxIndex = matrix[0].length - 1;
  const yMaxIndex = matrix.length - 1;
  let canMove = true;
  let directionIndex = 0;
  let blockedPaths = 0;

  const res = [matrix[0][0]];
  const usedIndices = new Set();
  usedIndices.add(`x${xIndex}y${yIndex}`);

  while (canMove) {
    let nextX = xIndex;
    let nextY = yIndex;

    // directions: East, South, West, North - in order
    if (directionIndex === 0) nextX++;
    else if (directionIndex === 1) nextY++;
    else if (directionIndex === 2) nextX--;
    else if (directionIndex === 3) nextY--;

    const nextIndex = matrix[nextY]?.[nextX];
    if (
      nextIndex !== undefined && !(usedIndices.has(`x${nextX}y${nextY}`)) &&
      nextX <= xMaxIndex && nextX >= 0 &&
      nextY <= yMaxIndex && nextY >= 0
    ) {
      xIndex = nextX;
      yIndex = nextY;
      res.push(nextIndex);
      usedIndices.add(`x${xIndex}y${yIndex}`);
      blockedPaths = 0;
    } else {
      blockedPaths++;
      directionIndex = (directionIndex + 1) % 4;
      if (blockedPaths >= 4) {
        canMove = false;
      }
    }
  }

  return res;
};

console.log('CASE 1:');
const testMatrix1 =
  [[1,2,3]
  ,[4,5,6]
  ,[7,8,9]];
console.log(spiralOrder(testMatrix1));

console.log('CASE 2:');
const testMatrix2 =
  [[1,2,3,4]
  ,[5,6,7,8]
  ,[9,10,11,12]];
console.log(spiralOrder(testMatrix2));

console.log('CASE 3:');
const testMatrix3 =
  [[2,5]
  ,[8,4]
  ,[0,-1]];
console.log(spiralOrder(testMatrix3));
