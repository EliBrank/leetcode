export class RandomizedSet {
  constructor() {
    this.set = new Set();
  }

  insert(n) {
    if (this.set.has(n)) return false;
    this.set.add(n);
    return true;
  }

  remove(n) {
    return this.set.delete(n);
  }

  getRandom() {
    const arr = Array.from(this.set);
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
};

const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomizedSet.remove(2)); // Returns false as 2 does not exist in the set.
console.log(randomizedSet.insert(2)); // Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomizedSet.getRandom()); // getRandom() should return either 1 or 2 randomly.
console.log(randomizedSet.remove(1)); // Removes 1 from the set, returns true. Set now contains [2].
console.log(randomizedSet.insert(2)); // 2 was already in the set, so return false.
console.log(randomizedSet.getRandom()); // Since 2 is the only number in the set, getRandom() will always return 2.
