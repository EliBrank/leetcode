/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) return false;
  }

  return true;
};

console.log('CASE 1:');
const testString1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(testString1));

console.log('CASE 2:');
const testString2 = "race a car";
console.log(isPalindrome(testString2));

console.log('CASE 3:');
const testString3 = " ";
console.log(isPalindrome(testString3));
