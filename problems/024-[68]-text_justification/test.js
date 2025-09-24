const totalSpace = 108;
const numSpaces = 10;
const spacing = Math.floor(totalSpace / numSpaces);
const spacingArr = new Array(numSpaces).fill(spacing);
console.log('spacingArr:', spacingArr);
for (let i = 0; i < (totalSpace % numSpaces); i++) {
  spacingArr[i]++;
}
console.log('spacingArr:', spacingArr);
