/**
 * @param {string} s
 * @return {number}
 */
export const romanToInt = function(s) {
  const numeralMap = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
  };

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    // Look at the current and next characters
    const current = numeralMap[s[i]];
    const next = numeralMap[s[i + 1]];

    // Add numeral value, unless next numeral is larger (or reach end of string)
    // In which case, subtract its value from the total
    if (current >= next || next === undefined) {
      res += current;
    } else {
      res -= current;
    }
  }

  return res;
};

console.log('CASE 1:');
const testString1 = 'III';
console.log(romanToInt(testString1));

console.log('CASE 2:');
const testString2 = 'LVIII';
console.log(romanToInt(testString2));

console.log('CASE 3:');
const testString3 = 'MCMXCIV';
console.log(romanToInt(testString3));
