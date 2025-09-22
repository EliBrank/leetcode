/**
 * @param {number[]} ratings
 * @return {number}
 */
export const candy = function(ratings) {
  if (ratings.length === 1) return 1;

  // Create copy of ratings array with each value init. to 1
  let candyGiven = Array(ratings.length).fill(1);
  // First pass: move left to right
  for (let i = 1; i < ratings.length; i++) {
    const current = ratings[i];
    const left = ratings[i - 1];

    if (current > left) {
      candyGiven[i] = candyGiven[i - 1] + 1;
    }
  }

  // Second pass: move right to left
  for (let i = (ratings.length - 2); i >= 0; i--) {
    const current = ratings[i];
    const right = ratings[i + 1];

    if (current > right && (candyGiven[i] <= candyGiven[i + 1])) {
      candyGiven[i] = candyGiven[i + 1] + 1;
    }
  }

  // Sum all values within candyGiven
  return candyGiven.reduce((a, b) => a + b);
};

const testRatings1 = [1,0,2];
console.log(candy(testRatings1));

const testRatings2 = [1,2,2];
console.log(candy(testRatings2));

const testRatings3 = [1,2,87,87,87,2,1];
console.log(candy(testRatings3));
