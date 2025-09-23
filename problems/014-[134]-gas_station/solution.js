/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
export const canCompleteCircuit = function(gas, cost) {
  const len = gas.length;
  for (let i = 0; i < len; i++) {
    if (gas[i] < cost[i]) continue;

    let tank = 0;
    for (let j = i; j < len + i; j++) {
      tank += gas[j % len];
      tank -= cost[j % len];

      if (tank < 0) break;
      if (j - i === len - 1) return i;
    }
  }

  return -1;
};

const testGas1 = [1,2,3,4,5];
const testCost1 = [3,4,5,1,2];
console.log(canCompleteCircuit(testGas1, testCost1));

const testGas2 = [2,3,4];
const testCost2 = [3,4,3];
console.log(canCompleteCircuit(testGas2, testCost2));
