/**
 * @param {number} num
 * @return {string}
 */
export const intToRoman = function(num) {
  const res = [];
  // Convert input num to reversed array
  // e.g. 1234 -> ['4','3','2','1']
  let numArr = num.toString().split('').reverse();

  const numMapArr = [
    {'one': 'I', 'four': 'IV', 'five': 'V', 'nine': 'IX'},
    {'one': 'X', 'four': 'XL', 'five': 'L', 'nine': 'XC'},
    {'one': 'C', 'four': 'CD', 'five': 'D', 'nine': 'CM'},
    {'one': 'M'},
  ];

  for (let i = 0; i < numArr.length; i++) {
    const digit = parseInt(numArr[i]);
    const numMap = numMapArr[i];

    // Process each digit using numMap from numMapArr
    // Index in numArr corresponds to ones, tens place, etc.
    if (digit === 4) {
      res.push(numMap.four)
    } else if (digit === 9) {
      res.push(numMap.nine)
    } else {
      for (let j = 0; j < (digit % 5); j++) {
        res.push(numMap.one);
      }
      if (digit >= 5) res.push(numMap.five);
    }
  }

  // Re-reverse, recombine array - turn back to normal string
  return res.reverse().join('');
};

const testNum1 = 3749;
console.log(intToRoman(testNum1));

const testNum2 = 58;
console.log(intToRoman(testNum2));

const testNum3 = 1994;
console.log(intToRoman(testNum3));
