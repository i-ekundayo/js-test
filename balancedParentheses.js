function isBalanced(str) {
  let balanced = 0;
  if (str.length === 0) return "You did not enter any string";

  for (let char of str) {
    if (char === "(") {
      balanced++;
    } else if (char === ")") {
      balanced--;

      if (balanced < 0) {
        return false;
      }
    }
  }

  return balanced === 0 ? true : false;
}

console.log(isBalanced("()()()"));
console.log(isBalanced("(()))"));
console.log(isBalanced("(a(b)c)"));
console.log(isBalanced(")("));
console.log(isBalanced("I am a boy"));
