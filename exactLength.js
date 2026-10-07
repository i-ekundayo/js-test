const sum = (num) => {
  if (!Array.isArray(num) || num.length === 0) {
    return 0;
  }
  return num.reduce((i, n) => i + n, 0);
};

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum.toString().length);
