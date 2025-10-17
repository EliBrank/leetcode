/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export const gameOfLife = function(board) {
  // Create copy of board matrix with all values zeroed
  const numLivingMatrix = Array.from(board, () => Array(board[0].length).fill(0));

  const coordinateOffsets = [
    [-1,-1],[-1,0],[-1,1],
    [0,-1],[0,1],
    [1,-1],[1,0],[1,1]
  ];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      for (const offsetPair of coordinateOffsets) {
        const checkRow = i + offsetPair[0];
        const checkCol = j + offsetPair[1];
        if (checkRow < 0 || checkCol < 0 || checkRow >= board.length || checkCol >= board[0].length) continue;
        const checkedCoordinate = board[checkRow][checkCol];
        if (checkedCoordinate === 1) {
          numLivingMatrix[i][j]++;
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const liveNeighbors = numLivingMatrix[i][j];
      if (liveNeighbors < 2 || liveNeighbors > 3) {
        board[i][j] = 0;
      } else if (liveNeighbors === 3) {
        board[i][j] = 1;
      }
    }
  }

  // return board;
};


console.log('CASE 1:');
const testBoard1 = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
];
console.log(gameOfLife(testBoard1));
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

console.log('CASE 2:');
const testBoard2 = [
  [1,0],
  [1,1]
];
console.log(gameOfLife(testBoard2));
// Output: [[1,1],[1,1]]
