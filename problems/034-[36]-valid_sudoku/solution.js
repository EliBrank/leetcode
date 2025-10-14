/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  // For sudoku: rows, columns 3x3 boxes
  const CONTAINER_TYPES = 3;
  // Number of each type of container on the board
  const NUM_CONTAINERS = 9;
  // Each container can contain numbers 1-9
  const POSSIBLENUMS = 9;

  // Array indices will serve as a map
  const boardMap = new Array(CONTAINER_TYPES * NUM_CONTAINERS * POSSIBLENUMS).fill(0);

  const boardFlat = board.flat();

  for (let i = 0; i < boardFlat.length; i++) {
    if (boardFlat[i] === '.') continue;
    const num = parseInt(boardFlat[i]);
    const rowNum = Math.floor(i / 9);
    const colNum = i % 9;
    const boxNum = (Math.floor(i / 3) % 3) + Math.floor(i / 27) * 3

    const rowOffset = 0 * (NUM_CONTAINERS * POSSIBLENUMS);
    const colOffset = 1 * (NUM_CONTAINERS * POSSIBLENUMS);
    const boxOffset = 2 * (NUM_CONTAINERS * POSSIBLENUMS);

    const rowIndexToCheck = rowOffset + (rowNum * NUM_CONTAINERS) + (num - 1);
    const colIndexToCheck = colOffset + (colNum * NUM_CONTAINERS) + (num - 1);
    const boxIndexToCheck = boxOffset + (boxNum * NUM_CONTAINERS) + (num - 1);

    if (boardMap[rowIndexToCheck] > 0 || boardMap[colIndexToCheck] > 0 || boardMap[boxIndexToCheck] > 0) return false; 
    boardMap[rowIndexToCheck]++;
    boardMap[colIndexToCheck]++;
    boardMap[boxIndexToCheck]++;
  }

  return true;
};

console.log('CASE 1:');
const testBoard1 =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(testBoard1));
// Output: true

console.log('CASE 2:');
const testBoard2 =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(testBoard2));
// Output: false

console.log('CASE 3:');
const testBoard3 =
[[".",".","2",".",".",".",".",".","."]
,[".",".",".",".",".",".",".","8","5"]
,[".",".",".",".",".",".",".",".","."]
,[".","2",".",".",".",".",".",".","."]
,[".",".",".","3",".",".",".",".","."]
,["8",".",".",".",".",".",".",".","."]
,[".",".",".",".",".","5",".",".","."]
,[".","5",".",".",".",".",".",".","."]
,["1",".","9",".",".",".",".",".","9"]];
console.log(isValidSudoku(testBoard3));
// Output: false
