/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export const convert = function(s, numRows) {
  let jumpDistance = numRows * 2 - 2;
  let diff = 0;
  const res = s[0];

  for (let i = 0; i < s.length; i++) {
    let j = i;
    while (j < s.length) {
      if (j < s.length && (jumpDistance !== 0)) {
        res.concat(s[j]);
        console.log('j:', j);
        console.log('s[j]:', s[j]);
        console.log();
        j += jumpDistance;
      }
      if (j < s.length && (diff !== 0)) {
        res.concat(s[j]);
        j += diff;
      }
    }
    diff += 2;
    jumpDistance -= 2;
  }
};

console.log('CASE 1:');
const testString1 = "PAYPALISHIRING";
const testNumRows1 = 3;
console.log(convert(testString1, testNumRows1));

console.log('CASE 2:');
const testString2 = "PAYPALISHIRING";
const testNumRows2 = 4;
console.log(convert(testString2, testNumRows2));

