/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export const convert = function(s, numRows) {
  let jump1 = (numRows - 1) * 2;
  let jump2 = 0;
  const res = [];

  if (numRows === 1) return s;

  // i represents starting indices (each value in first column)
  for (let i = 0; i < numRows; i++) {
    // j loop iterates through each row
    let j = i;
    // Stop j loop if it goes out of bounds
    while (j < s.length) {
      // Also do bounds check and zero check for each jump before pushing
      if (j < s.length && (jump1 !== 0)) {
        res.push(s[j]);
        j += jump1;
      }
      if (j < s.length && (jump2 !== 0)) {
        res.push(s[j]);
        j += jump2;
      }
    }
    jump1 -= 2;
    jump2 += 2;
  }

  // Recombine as string
  return res.join('');
};

console.log('CASE 1:');
const testString1 = "PAYPALISHIRING";
const testNumRows1 = 3;
console.log(convert(testString1, testNumRows1));

console.log('CASE 2:');
const testString2 = "PAYPALISHIRING";
const testNumRows2 = 4;
console.log(convert(testString2, testNumRows2));
