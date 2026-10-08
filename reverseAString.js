const reverse = (str) => {
  if (str.length === 0) {
    return str;
  }

  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
  // return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};

console.log(reverse("hello"));
console.log(reverse("hi😀"));
