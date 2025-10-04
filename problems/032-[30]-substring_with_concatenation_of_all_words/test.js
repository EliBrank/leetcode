const words = ["a", "ab", "abc", "abc", "def", "ghi", "abcdefghi"];

const wordCounts = words.reduce((acc, word) => {
  if (!acc[word.length]) {
    acc[word.length] = {};
  }

  acc[word.length][word] = (acc[word.length][word] || 0) + 1;

  return acc;
}, {});

const keys = Object.keys(wordCounts).map(key => parseInt(key));

console.log(keys);

